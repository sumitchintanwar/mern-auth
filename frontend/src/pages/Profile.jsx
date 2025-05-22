import React, { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { data } from "react-router-dom";
// import { useRef } from "react";
// import { app } from "../firebase";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log(currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [image, setImage] = useState(undefined);
  // const [percent, setPercent] = useState(0);
  // const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  // const fileRef = useRef(null);

  // // console.log("Current User:", currentUser);
  // // console.log("Photo URL:", currentUser.user.photo);
  // useEffect(() => {
  //   if (image) {
  //     handleFileUpload(image);
  //   }
  // }, [image]);
  // const handleFileUpload = async (image) => {
  //   const storage = getStorage(app);
  //   const fileName = new Date().getTime() + image.name;
  //   const storageRef = ref(storage, fileName);
  //   const uploadTask = uploadBytesResumable(storageRef, image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setImagePercent(Math.round(progress));
  //     },
  //     (error) => {
  //       setImageError(true);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
  //         setFormData({ ...formData, profilePicture: downloadURL })
  //       );
  //     }
  //   );
  // };
  useEffect(() => {
    if (Object.keys(formData).length > 0 && error) {
      dispatch(updateUserFailure(false)); // Reset the error
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      navigate("/sign-in");
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  return (
    <div className="mt-0  flex flex-col items-center justify-center min-h-screen">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center mt-4 my-7">
            <form onSubmit={handleSubmit} className="flex flex-col" action="">
              {/* <input
                type="file"
                ref={fileRef}
                hidden
                accept="image/.*"
                onChange={(e) => {
                  e.target.files[0];
                }}
              /> */}
              <img
                src={
                  currentUser.photo ||
                  currentUser.user.photo ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="Profile"
                referrerPolicy="no-referrer"
                // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                onClick={() => fileRef.current.click()}
                className="h-24 w-24 self-center cursor-pointer rounded-full object-cover bg-amber-50"
              />

              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  defaultValue={
                    currentUser.username || currentUser.user.username
                  }
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  // defaultValue={currentUser?.email}
                  defaultValue={currentUser.email || currentUser.user.email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  // defaultValue={currentUser?.photo}
                  // defaultValue={currentUser?._id}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-7 w-full hover:bg-gray-50 hover:text-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
              >
                {loading ? "Loading..." : "Update"}
              </button>
            </form>
          </h1>
          <div className="flex justify-between">
            <span
              onClick={handleDeleteAccount}
              className=" cursor-pointer text-red-600 "
              type="submit"
            >
              Delete Account
            </span>
            <span className="cursor-pointer  text-red-600 text-center">
              Logout
            </span>
          </div>
          <p className="text-red-700 mt-5">
            {error && "Something went wrong!"}
          </p>
          <p className="text-green-700 mt-5">
            {updateSuccess && "User is updated successfully!"}
          </p>
        </div>
      </div>
    </div>
  );
}
