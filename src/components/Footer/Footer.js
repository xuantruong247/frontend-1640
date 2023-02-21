import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="container px-6 mx-auto ">
        <div className="grid grid-cols-12">
          <NavLink className="pb-6 col-span-full md:pb-0 md:col-span-6 text-3xl no-underline text-white pt-20">
            CMS GREENWICH
          </NavLink>

          <div className=" col-span-6 md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium pl-8 text-red-600">
              GreenWich Việt Nam
            </p>
            <ul>
              <li>
                <p className="text-white no-underline text-lg">
                  Số 20 Cộng Hoà, Phường 12, Quận Tân Bình, Thành Phố Hồ Chí
                  Minh
                </p>
              </li>
              <li>
                <p to="/idea" className="text-white no-underline text-lg">
                  Hotline: 0933.108.554
                </p>
              </li>
              <li>
                <p to="/submision" className="text-white no-underline text-lg">
                  Điện thoại: 028.7300.2266
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
                <NavLink to="/" className="text-white no-underline text-lg flex">
                <AiOutlineRight className="pt-2 text-red-500"/>
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/idea" className="text-white no-underline text-lg flex">
                <AiOutlineRight className="pt-2 text-red-500"/>
                  <p>Idea</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/submision"
                  className="text-white no-underline text-lg flex"
                >
                  <AiOutlineRight className="pt-2 text-red-500"/>
                  <p>Submission</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white no-underline text-lg flex"
                >
                  <AiOutlineRight className="pt-2 text-red-500"/>
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
