import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "../../components/user-table/UserTable";
import { rows } from "../../usersData/usersData";
import { LuClipboardEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import Add from "../../components/add/Add";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (row) => {
      return (
        <img
          src={row.row.img || "./avatar.png"}
          alt=""
          className="w-10 h-10 rounded-full"
        />
      );
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 110,
    editable: true,
  },
  {
    field: "createDate",
    headerName: "Create At",
    width: 140,
    editable: true,
  },
  {
    field: "status",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (row) => {
      return (
        <div className="flex gap-1 items-center mt-3 cursor-pointer">
          <Link to={`/users/${row.id}`}>
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
function Users() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex gap-5 ml-5">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="text-sm border px-3 rounded-md bg-white text-black"
          >
            Add New User
          </button>
        </div>
        <div className="">
          <UserTable rows={rows} columns={columns} />
          {open && (
            <Add setOpen={setOpen} columns={columns} title={"Add User"} />
          )}
        </div>
      </div>
    </>
  );
}

export default Users;
