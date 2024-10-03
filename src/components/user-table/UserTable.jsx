import { Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import "./usertable.css";

function UserTable({ userId, rows, columns }) {
  return (
    <>
      <div className="px-5 pt-6">
        <Paper className="h-[550px] w-auto">
          <DataGrid
            className="flex flex-row-reverse" 
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 7,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
          />
        </Paper>
      </div>
    </>
  );
}

export default UserTable;
