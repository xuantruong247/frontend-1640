import React from "react";
import { NavLink } from "react-router-dom";
import logoUser from "../../asset/img/logo-User.webp";
import { motion } from "framer-motion";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <header className="p-4">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="/"
          className="flex items-center p-2"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          CMS GREENWICH
        </a>
        <ul className="space-x-3 flex items-center">
          <li className="flex">
            <NavLink
              to="/home"
              style={navLinkStyles}
              className="flex items-center px-4 text-black no-underline text-lg pt-2"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/idea"
              style={navLinkStyles}
              className="flex items-center px-4 text-black no-underline text-lg pt-2"
            >
              Idea
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/submission"
              style={navLinkStyles}
              className="flex items-center px-4 text-black no-underline text-lg pt-2"
            >
              Submission
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              style={navLinkStyles}
              className="flex items-center px-4 text-black no-underline text-lg pt-2"
            >
              Contact
            </NavLink>
          </li>
          <button>
            <motion.img
              className="w-10 pt-2 items-center"
              whileTap={{ scale: 1.2 }}
              src={logoUser}
              alt="user"
            />
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
