import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logoGR from "../../asset/img/2022-Greenwich-Eng.jpg";

const Search = () => {
  return (
    <div className="container flex justify-between">
      <a href='/'>
        <img className="h-32" src={logoGR} alt="" />
      </a>
      <div className=" w-full mt-5">
        <form className="  flex justify-end ">
          <input
            type="search"
            id="default-search"
            className=" w-1/4 py-1 text-sm text-black bg-gray-300"
            placeholder="Search Courses"
          />
          <a href="/" className="border bg-gray-300 pt-1 px-2 text-black">
            <AiOutlineSearch />
          </a>
        </form>
      </div>
    </div>
  );
};

export default Search;
