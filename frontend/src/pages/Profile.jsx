import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    if (Object.keys(formData).length > 0 && error) {
      dispatch(updateUserFailure(null));
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());

      const res = await fetch(
        `/api/user/update/${currentUser._id || currentUser.user._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok || data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (err) {
      dispatch(updateUserFailure(err));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(
        `/api/user/delete/${currentUser._id || currentUser.user._id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (!res.ok || data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }

      dispatch(deleteUserSuccess());
      navigate("/sign-in");
    } catch (err) {
      dispatch(deleteUserFailure(err));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
      navigate("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md rounded-lg bg-white shadow dark:bg-gray-800">
          <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Profile
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <img
                src={
                  currentUser.photo ||
                  currentUser.user?.photo ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="Profile"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  defaultValue={
                    currentUser.username || currentUser.user?.username
                  }
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={currentUser.email || currentUser.user?.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border p-2 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>

            <div className="flex justify-between text-sm">
              <span
                onClick={() => setShowDeleteDialog(true)}
                className="cursor-pointer text-red-600 hover:underline"
              >
                Delete Account
              </span>

              <span
                onClick={handleSignOut}
                className="cursor-pointer text-red-600 hover:underline"
              >
                Logout
              </span>
            </div>

            {error && (
              <p className="text-center text-sm text-red-600">
                {error.message || "Something went wrong"}
              </p>
            )}

            {updateSuccess && (
              <p className="text-center text-sm text-green-600">
                Profile updated successfully
              </p>
            )}
          </div>
        </div>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Delete Account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowDeleteDialog(false);
                  handleDeleteAccount();
                }}
                className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
