import React from "react";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";
import IsLoggedIn from "./IsLoggedIn";

import Contact from "./../pages/support/Contact";

import Register from "./../pages/register/Register";
import IsAlreadyLoggedIn from "./IsAlreadyLoggedIn";
import Uploads from "../pages/dashboard/Uploads";
import AdminProtected from "./AdminProtected";
import SuperAdmin from "./SuperAdminProtected";
import Login from "../pages/login/Login";
import Reg from "../pages/register/Reg";
import SuperAdminUploads from "../pages/dashboard/SuperAdminUploads";
import Wildfire from "../pages/trackDiaster/wildfire/Wildfire";
import Earthquake from "../pages/trackDiaster/earthquake/Earthquake";
import Weather from "../pages/weather/Weather";
import Home from "../pages/home/Home"
import Tips from "../pages/tips/Tips";
import TermsAndCond from "../pages/termsAndCondition/TermsAndCond";
import AboutUs from "../pages/aboutUs/AboutUs";
import FAQ from "../pages/faq/FAQ";
const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <IsLoggedIn>
            <Home />
          </IsLoggedIn>
        }
      />

      <Route
        path="/admin-uploads"
        element={
          <IsLoggedIn>
            <AdminProtected>
              <Uploads />
            </AdminProtected>
          </IsLoggedIn>
        }
      />
      <Route
        path="/super-admin-uploads"
        element={
          <IsLoggedIn>
            <SuperAdmin>
              <SuperAdminUploads />
            </SuperAdmin>
          </IsLoggedIn>
        }
      />
      <Route
        path="/register"
        element={
          <IsAlreadyLoggedIn>
            <Register />
          </IsAlreadyLoggedIn>
        }
      />
      <Route
        path="/login"
        element={
          <IsAlreadyLoggedIn>
            <Login />
          </IsAlreadyLoggedIn>
        }
      />

      {/* <Route
        path="/faq"
        element={
          <IsLoggedIn>
            <** />
          </IsLoggedIn>
        }
      /> */}
      <Route
        path="/contact"
        element={
          <IsLoggedIn>
            <Contact />
          </IsLoggedIn>
        }
      />

      <Route
        path="/track-wildfire"
        element={
          <IsLoggedIn>
            <Wildfire />
          </IsLoggedIn>
        }
      />

      <Route
        path="/earthquake-detect"
        element={
          <IsLoggedIn>
            <Earthquake />
          </IsLoggedIn>
        }
      />

      <Route
        path="/check-forecast"
        element={
          <IsLoggedIn>
            <Weather />
          </IsLoggedIn>
        }
      />

      <Route
        path="/tips"
        element={
          <IsLoggedIn>
            <Tips />
          </IsLoggedIn>
        }
      />

      <Route
        path="/terms-conditions"
        element={
          <IsLoggedIn>
            <TermsAndCond />
          </IsLoggedIn>
        }
      />

      <Route
        path="/about-us"
        element={
          <IsLoggedIn>
            <AboutUs />
          </IsLoggedIn>
        }
      />

      <Route
        path="/faq"
        element={
          <IsLoggedIn>
            <FAQ />
          </IsLoggedIn>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
