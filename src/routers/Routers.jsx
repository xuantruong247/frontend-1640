import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IdeaPage from "../Pages/IdeaPage/IdeaPage";
import SubmissionPage from "../Pages/SubmissionPage/SubmissionPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import LoginPage from "../Pages/LoginPage";
import Home from '../Pages/HomePage/HomePage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="home" element={<Home />} />
      <Route path="idea" element={<IdeaPage />} />
      <Route path="submission" element={<SubmissionPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
