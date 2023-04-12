import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify-custom.css";


import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import "./App.css";
// import "./Demo.css";

import { useStateContext } from "./contexts/ContextProvider";
import Routers from "./routers/Routers";
import { useIsLoggedInQuery } from "./services/apiSlice";
import { FiSettings } from "react-icons/fi";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const isLoggedInfo = useIsLoggedInQuery();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {isLoggedInfo.isSuccess && isLoggedInfo.data?.status && (
            <>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
            </>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full " +
                  (isLoggedInfo?.data?.status && "md:ml-72")
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              {/* all routes */}
              <Routers />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      <ToastContainer
        style={{marginTop: "60px"}}
        autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast"
      />
    </div>
  );
};

export default App;
