import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "../../components/user-table/UserTable";
import { inputProducts, rows } from "../../usersData/usersData";
import { LuClipboardEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import Add from "../../components/add/Add";

const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (row) => {
      return (
        <img
          src={row.row.img || "./avatar.pnf"}
          alt=""
          className="w-10 h-10 rounded-full"
        />
      );
    },
  },

  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
  },
  {
    field: "colors",
    headerName: "Color",
    width: 100,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 110,
    editable: true,
  },
  {
    field: "createAt",
    headerName: "Create At",
    width: 140,
    editable: true,
  },
  {
    field: "status",
    headerName: "In stock",
    width: 100,
    type: "boolean",
  },
  {
    field: "action",
    headerName: "Action",

    width: 140,
    renderCell: (row) => {
      return (
        <div className="flex gap-1 items-center mt-3 cursor-pointer">
          <Link to={`/products/${row.id}`}>
            <LuClipboardEdit size={25} color="palegreen" />
          </Link>
          <div className="">
            <AiOutlineDelete size={25} color="red" />
          </div>
        </div>
      );
    },
  },
];
function Products() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex gap-5 ml-5">
          <h1 className="text-2xl font-semibold">Products</h1>
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="text-sm border px-3 rounded-md bg-white text-black"
          >
            Add New Product
          </button>
        </div>
        <div className="">
          <UserTable rows={inputProducts} columns={productColumns} />
          {open && (
            <Add
              setOpen={setOpen}
              columns={productColumns}
              title={"Add Product"}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
