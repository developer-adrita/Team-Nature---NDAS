import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useCurrentUserQuery } from "../services/apiSlice";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();
  const currentUserInfo = useCurrentUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex items-center">
        {currentUserInfo.isSuccess && currentUserInfo.data?.status ? (
          <>
            <NavButton
              title="Notification"
              dotColor="rgb(254, 201, 15)"
              customFunc={() => handleClick("notification")}
              color={currentColor}
              icon={<RiNotification3Line />}
            />
            <TooltipComponent content="Profile" position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                onClick={() => handleClick("userProfile")}
              >
                <img
                  className="rounded-full w-8 h-8"
                  src={`https://res.cloudinary.com/hostingimagesservice/image/upload/v1674787878/eduBangla/images/default-profile_ka1ukw.png`}
                  alt="user-profile"
                />
                <p>
                  <span className="text-gray-400 text-14">Hi,</span>{" "}
                  <span className="text-gray-400 font-bold ml-1 text-14">
                    {currentUserInfo.data?.user.name}
                  </span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
              </div>
            </TooltipComponent>
            {/* {isClicked.notification && <Notification />} */}
            {isClicked.userProfile && (
              <UserProfile userInfo={currentUserInfo.data} />
            )}
          </>
        ) : (
          <span
            className="cursor-pointer text-cyan-500"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        )}

        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
