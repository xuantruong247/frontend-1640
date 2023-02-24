import React from "react";

const AddIdea = () => {
  return (
    <div className="container">
      <h3>Add Idea</h3>
      <hr />
      <div className="w-1/3">
        <form className="bg-white rounded pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black text-base " for="title">
              Title
            </label>
            <input
              className=" border-2 rounded w-full text-black py-1 "
              type="text"
            />
            <label className="block text-black text-base mt-2" for="brief">
              Brief
            </label>
            <input
              className=" border-2 rounded w-full text-black py-1 "
              type="text"
            />
            <label className="block text-black text-base mt-2" for="content">
              Content
            </label>
            <input
              className=" border-2 rounded w-full text-black py-1 "
              type="text"
            />
            <label className="block text-black text-base mt-2" for="file">
              File
            </label>
            <input
              className=" border-2 rounded w-full text-black "
              type="file"
            />

            <label className="block text-black text-base mt-2">Category</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   placeholder-gray-400 ">
              <option selected>Choose Category</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Create
            </button> <br />
            <a href="submission">Back to list</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIdea;
