import React from "react";

function Add({ setOpen, columns, title }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-add w-full h-full absolute top-0 left-0 bg-[#3b486086] flex items-center justify-center z-30">
      <div className="modal px-8 py-6 rounded-lg  bg-[#333f56] relative z-50">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <span
            className="text-xl cursor-pointer hover:text-red-600 duration-200 font-semibold"
            onClick={() => setOpen(false)}
          >
            X
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[500px] flex  flex-wrap justify-between "
        >
          {columns
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "img" &&
                item.field !== "Avatar" &&
                item.field !== "action" &&
                item.field !== "image"
            )
            .map((column) => {
              return (
                <div className="item " key={column.field}>
                  <label className="text-md inline-block ">
                    {column.headerName}
                  </label>
                  <br />
                  <input
                    className="text-md bg-transparent border border-gray-600 outline-none px-1 py-2 rounded-sm mt-1 mb-2"
                    type={column.field}
                    placeholder={column.field}
                  />
                </div>
              );
            })}
        </form>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" mt-4 bg-white text-black py-2 px-7 text-md rounded-md font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
