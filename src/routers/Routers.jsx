import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IdeaPage from "../Pages/IdeaPage/IdeaPage";
import SubmissionPage from "../Pages/SubmissionPage/SubmissionPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Home from "../Pages/HomePage/HomePage";
import LoginPage from "./../Pages/LoginPage/LoginPage";
import DetailSub from "../Pages/SubmissionPage/detail/DetailSub";
import DetailIdea from "../Pages/IdeaPage/detail/DetailIdea";

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
    </Routes>
  );
};

export default Routers;
