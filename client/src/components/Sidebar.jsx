import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/navLinks";
import { useStateContext } from "../contexts/ContextProvider";
import { useIsTeacherQuery } from "../services/apiSlice";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  const responseInfo = useIsTeacherQuery();

  const [newLinks, setNewLinks] = useState(links);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    let userLinks = links.slice(1, links.length);
    responseInfo.data?.user.user_type === "user" && setNewLinks(userLinks);
  }, [responseInfo]);

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <div className="text-3xl font-semibold text-center text-cyan-700 uppercase mt-5">
                <a href="/">
                  <img
                    style={{
                      width: "180px",
                    }}
                    src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1677436613/My_project-1_1_rbvhqi.png"
                    alt=""
                  />{" "}
                </a>
              </div>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {newLinks.map((item, i) => (
              <div key={i}>
                <p className="text-[#05A8C0] dark:text-[#05A8C0] m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link, i) => (
                  <React.Fragment key={i}>
                    {link && (
                      <>
                        {link.route === "super-admin-uploads" &&
                        responseInfo.data?.user?.user_type === "admin" ? (
                          <></>
                        ) : link.route === "admin-uploads" &&
                          responseInfo.data?.user?.user_type ===
                            "super-admin" ? (
                          <></>
                        ) : (
                          <NavLink
                            to={`/${link?.route}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : "",
                            })}
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            {link?.icon}
                            <span className="capitalize ">{link?.name}</span>
                          </NavLink>
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
