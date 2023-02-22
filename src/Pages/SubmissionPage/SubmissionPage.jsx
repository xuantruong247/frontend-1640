import React from "react";
import { NavLink } from "react-router-dom";

const SubmissionPage = () => {
  return (
    <div className="container mb-28">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1671766848/edu-survey-landing-image.jpg"
          alt="logoSub"
        />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-red-600 font-medium text-lg text-left">
            Dealine_1:{" "}
            <span className="text-gray-700 font-normal text-base">
              28 - 02 - 2023 & 11:59 PM
            </span>
          </p>
          <p className="text-red-600 font-medium text-lg text-left ">
            Dealine_2:{" "}
            <span className="text-gray-700 font-normal text-base">
              12 - 03 - 2023 & 11:59 PM
            </span>
          </p>

          <NavLink to='/detailsub'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-full mt-2">
              View Ideas
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
