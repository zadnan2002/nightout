import  {React,useState,useLayoutEffect, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material';








 





const columns = [
   
  { field: 'ticketID', headerName: 'ID',type:'number', width: 70 },
  { field: 'ticketPrice', headerName: 'Ticket Price', width: 150 },
  
  {
    field: 'eventRequestName',
    headerName: 'Event Name',
   
    width: 250,
  },
  {
    field: 'dateRequest',
    headerName: 'Date',
   
    width: 190,
    valueGetter: (params) =>
    `${params.row.dateRequest.substring(0,10)  ||''} `,
  },
  {
    field: 'timeRequest',
    headerName: 'Time',
  
    width: 190,
  },
 
  {
    field: 'username',
    headerName: 'Customer Username',
  
    width: 190,
  },
  {
    field: 'venueUsername',
    headerName: 'Venue Username',
  
    width: 190,
  },
];
var tableData=1;











export default function DataTable6() {
    const[rows,setRows]=useState([]);
    const username=localStorage.getItem('username');
    const [selectedRows, setSelectedRows] =useState(-1);
    const handleTableDelete=()=>{
        if(selectedRows===-1){
          alert("Please select rows first");
        }
        else{
                axios.post('http://localhost:3002/ticket4', {
                 selectedRows:selectedRows,
               })
               setSelectedRows(-1);
                 window.location.reload(false);
                     }
                    }
   
    useEffect(()=>{

      const handleLoadUser = () => { 
        axios.post('http://localhost:3002/venue1', {
         
            username:username
        })
    }



   

 function handleTableFill(){
    
        axios.post(`http://localhost:3002/ticket3`, {
           
        params: {
                tableData:tableData,
               
            },
          })
          .then((res) => {
          
            setRows(res.data);
           
            console.log("FRONTEND");
            
          });
     
      }
      handleLoadUser();
   handleTableFill();
   
   console.log("Sandwich")
   console.log(rows);
   console.log("ROW")
    },[]);
   
  return (
    

    
    <div style={{ height: 720, width: '100%',backgroundColor:"#F8F8F8"}}>
      <DataGrid
      rowSpacingType='margin'
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowId={(row) => row.ticketID}
        onSelectionModelChange={itm=>setSelectedRows(itm)}  
      />
          <div className='button-container-admin'>
<div className='container-admin'>
<Button onClick={handleTableDelete} color='error' variant='contained'>Revoke Tickets</Button>
</div>

</div>
    </div>
  );
}