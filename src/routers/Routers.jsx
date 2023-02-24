import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IdeaPage from "../Pages/IdeaPage/IdeaPage";
import SubmissionPage from "../Pages/SubmissionPage/SubmissionPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Home from "../Pages/HomePage/HomePage";
import LoginPage from "./../Pages/LoginPage/LoginPage";
import DetailSub from "../Pages/SubmissionPage/detail/DetailSub";
import DetailIdea from "../Pages/IdeaPage/detail/DetailIdea";
import ManagerSubmission from "./../Pages/Manager/SubmissionManager/ManagerSubmission";
import AddIdea from "./../Pages/SubmissionPage/AddIdea";
import AddSubmission from "../Pages/Manager/SubmissionManager/AddSubmission";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="home" element={<Home />} />
      <Route path="idea" element={<IdeaPage />} />
      <Route path="submission" element={<SubmissionPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="detailsub" element={<DetailSub />} />
      <Route path="detailidea" element={<DetailIdea />} />
      <Route path="addIdea" element={<AddIdea />} />

      {/* manager */}
      <Route path="manager/submission" element={<ManagerSubmission />} />
      <Route path="manager/addsubmission" element={<AddSubmission />} />
    </Routes>
  );
};

export default Routers;
