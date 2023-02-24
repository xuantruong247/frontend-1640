import React from "react";

const AddSubmission = () => {
  return (
    <div className="container">
      <h3>Add Submission</h3>
      <hr />
      <div className="w-1/3">
        <form className="bg-white rounded pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black text-base " for="name">
              Name
            </label>
            <input
              className=" border-2 rounded w-full text-black py-1 "
              type="text"
            />
            <label className="block text-black text-base mt-2" for="dealine_1">
              Dealine_1
            </label>
            <input
              className=" border-2 rounded w-full text-black py-1 "
              type="datetime-local"
            />
            <label className="block text-black text-base mt-2" for="dealine_2">
              Dealine_2
            </label>
            <input
              className=" border-2 rounded w-full text-black py-1 "
              type="datetime-local"
            />
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Create
            </button>{" "}
            <br />
            <a href="submission">Back to list</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubmission;
