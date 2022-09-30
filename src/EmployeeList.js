import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 200,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 200,
      editable: true,
    },
    {
      field: 'salary',
      headerName: 'Salary',
      type: 'number',
      width: 150,
      editable: true,
      
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },

  ];

 


function EmployeeList(localData) {

  return (
    <Box sx={{ height: 400, width: '50%' , mx: 'auto' , mt: '2rem'}}>
    <DataGrid
      rows={localData.data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
  )
}

export default EmployeeList