import React from "react";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";
import IsLoggedIn from "./IsLoggedIn";
import Course from "./../pages/general/Course";
import Audio from "../pages/blinded/Audio";
import CareerBuildingCourses from "./../pages/buildCareer/CareerBuildingCourses";
import TalkToExperts from "./../pages/buildCareer/TalkToExperts";
import ShareYourOpinion from "./../pages/buildCareer/ShareYourOpinion";
import Contact from "./../pages/support/Contact";
import ViewCourse from "../pages/general/ViewCourse";
import ViewTopic from "../pages/general/ViewTopic";
import ViewContent from "../pages/general/ViewContent";
import Login from "../pages/login/Login";
import Register from "./../pages/register/Register";
import IsAlreadyLoggedIn from "./IsAlreadyLoggedIn";
import Uploads from "../pages/dashboard/Uploads";
import AdminProtected from "./AdminProtected";
import SuperAdmin from "./SuperAdminProtected";
import Log from "../pages/login/Log";
import Reg from "../pages/register/Reg";
import SuperAdminUploads from "../pages/dashboard/SuperAdminUploads";
import Wildfire from "../pages/trackDiaster/wildfire/Wildfire";
import Earthquake from "../pages/trackDiaster/earthquake/Earthquake";

const Routers = () => {
	return (
    <Routes>
      <Route path="/loginnnn" element={<Log />} />

      <Route path="/regg" element={<Reg />} />
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
      <Route
        path="/select-courses"
        element={
          <IsLoggedIn>
            <Course />
          </IsLoggedIn>
        }
      />
      <Route
        path="/view-course"
        element={
          <IsLoggedIn>
            <ViewCourse />
          </IsLoggedIn>
        }
      />
      <Route
        path="/view-topic"
        element={
          <IsLoggedIn>
            <ViewTopic />
          </IsLoggedIn>
        }
      />
      <Route
        path="/topic-content"
        element={
          <IsLoggedIn>
            <ViewContent />
          </IsLoggedIn>
        }
      />
      <Route
        path="/audio-courses"
        element={
          <IsLoggedIn>
            <Audio />
          </IsLoggedIn>
        }
      />
      <Route
        path="/career-building-courses"
        element={
          <IsLoggedIn>
            <CareerBuildingCourses />
          </IsLoggedIn>
        }
      />
      <Route
        path="/talk-to-expert"
        element={
          <IsLoggedIn>
            <TalkToExperts />
          </IsLoggedIn>
        }
      />
      <Route
        path="/faq"
        element={
          <IsLoggedIn>
            <ShareYourOpinion />
          </IsLoggedIn>
        }
      />
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

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
