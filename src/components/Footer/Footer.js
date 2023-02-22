import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="container px-6 mx-auto ">
        <div className="grid grid-cols-12">
          <NavLink
            to="/"
            className="pb-6 col-span-full md:pb-0 md:col-span-6 text-3xl no-underline text-white pt-24"
          >
            IDEA GREENWICH
          </NavLink>

          <div className=" col-span-6 md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium pl-8 text-red-600">
              GreenWich Viet Nam
            </p>
            <ul>
              <li>
                <p className="text-white no-underline text-lg">
                  No. 20 Cong Hoa, Ward 12, Tan Binh District, Ho Chi Minh City
                </p>
              </li>
              <li>
                <p to="/idea" className="text-white no-underline text-lg">
                  Hotline: 028.7300.2266
                </p>
              </li>
              <li>
                <p to="/submision" className="text-white no-underline text-lg">
                  Phone: 0933.108.554
                </p>
              </li>
              <li>
                <p to="/contact" className="text-white no-underline text-lg">
                  Email: group18@example.com
                </p>
              </li>
            </ul>
          </div>

          <div className=" col-span-6 md:text-left md:col-span-3 ml-32">
            <p className="pb-1 text-xl font-medium pl-9 text-red-600">
              Userful Links
            </p>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="text-white no-underline text-lg flex"
                >
                  <AiOutlineRight className="pt-2 text-red-500" />
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/idea"
                  className="text-white no-underline text-lg flex"
                >
                  <AiOutlineRight className="pt-2 text-red-500" />
                  <p>Idea</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/submision"
                  className="text-white no-underline text-lg flex"
                >
                  <AiOutlineRight className="pt-2 text-red-500" />
                  <p>Submission</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white no-underline text-lg flex"
                >
                  <AiOutlineRight className="pt-2 text-red-500" />
                  <p>Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
