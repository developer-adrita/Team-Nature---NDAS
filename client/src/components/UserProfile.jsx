import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useCurrentUserQuery, useLogoutMutation } from "../services/apiSlice";
import { toast } from "react-toastify";
// import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const [logout, responseInfo] = useLogoutMutation();
  const { setIsClicked, initialState } = useStateContext();

  const currentUserInfo = useCurrentUserQuery();

  const handleLogout = () => {
    logout()
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success("Logout successful");
          setIsClicked(initialState);
        }
      });
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674787878/eduBangla/images/default-profile_ka1ukw.png"
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {currentUserInfo.data?.user.name}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            {currentUserInfo.data?.user.user_type}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            {currentUserInfo.data?.user.email}
          </p>
        </div>
      </div>
     
      <div className="mt-5">
        <button
          onClick={() => handleLogout()}
          className="bg-cyan-500 w-full py-3 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
