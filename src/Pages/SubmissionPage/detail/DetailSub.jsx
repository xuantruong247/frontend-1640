import React from "react";
import { NavLink } from "react-router-dom";

function DetailSub() {
  return (
    <div>
      <div className="container" style={{ height: "100vh" }}>
        <h1>List ideas</h1>
        <div className="grid grid-cols-5">
          <div className="col-span-1 font-bold text-lg leading-3">
            <p>Name</p>
            <p>Dealine_1</p>
            <p>Dealine_2: </p>
          </div>
          <div className="col-span-3 leading-3">
            <p>The Coldest Sunset</p>
            <p>28 - 02 - 2023 & 11:59 PM</p>
            <p>12 - 03 - 2023 & 11:59 PM</p>
          </div>
        </div>
        <NavLink to='/addIdea'>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add Idea
          </button>
        </NavLink>
        <div>
          <a href="submission">Back to list</a>
        </div>
      </div>
    </div>
  );
}

export default DetailSub;
