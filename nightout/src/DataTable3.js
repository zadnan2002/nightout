import  {React,useState,useLayoutEffect, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';








 





const columns = [
   
  { field: 'requestID', headerName: 'ID',type:'number', width: 70 },
  { field: 'eventRequestName', headerName: 'Event Name', width: 150 },
  { field: 'eventRequestType', headerName: 'Event Genre', width: 130 },
  {
    field: 'ageRestrictionRequest',
    headerName: 'Age Restriction',
    
    width: 120,
  },
  {
    field: 'dressCodeRequest',
    headerName: 'Dress Code',
  

    width: 110,
   
  },
  {
    field: 'ticketRequestCount',
    headerName: 'Ticket Count',
  
    width: 110,
  },
  {
    field: 'descriptionRequest',
    headerName: 'Description',
  
    width: 210,
  },
  {
    field: 'statusRequest',
    headerName: 'Status',
   
    width: 80,
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
    field: 'performer',
    headerName: 'Performer',
  
    width: 190,
  },
  {
    field: 'ticketPrice',
    headerName: 'Ticket Price',
  
    width: 190,
  },
];
var tableData=1;











export default function DataTable3() {
    const[rows,setRows]=useState([]);
    useEffect(()=>{
 function handleTableFill(){
    
        axios.get(`http://localhost:3002/admin3`, {
            params: {
                tableData:tableData,
            },
          })
          .then((res) => {
          
            setRows(res.data);
           
            console.log("FRONTEND");
            
          });
     
      }
    
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
        getRowId={(row) => row.requestID}
      />
    </div>
  );
}