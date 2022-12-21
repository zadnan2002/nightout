import {React,useState} from 'react'
import AppAppBar from './modules/views/AppAppBar'
import './Admin.css';
import { Button, Dialog, Table, TableBody, Typography } from '@mui/material';
import DataTable from './DataTable';
import { display, flexbox, margin } from '@mui/system';
import DataTable2 from './DataTable2';
import DataTable3 from './DataTable3';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';



function Admin() {
  

const username = localStorage.getItem('username');
const token = localStorage.getItem('token');

if(token!=='tM001'){
window.location.replace('/');
}
else
  return (

    <div className='main-block-admin'>
      

<br/>
<br/>
<br/>
<Typography variant='h4'>
Admin Portal
    </Typography>
<div className='smaller-block-admin'>

<div >

</div>
  <div style={{ height: "100%", width: '100%',marginBottom:"80px" }}>
  <Typography variant='h5' align='left'>
Event Requests
    </Typography>
<DataTable />
</div>


<div style={{ height: "100%", width: '100%',marginBottom:"80px" }}>
  <br/>
  <Typography variant='h5' align='left'>
Active Events
    </Typography>
<DataTable2 />
</div>


<div style={{ height: "100%", width: '100%' }}>
  <br/>
  <Typography variant='h5' align='left'>
Event Archive
    </Typography>
<DataTable3 />

</div>

</div>
    </div>
  )
}

export default Admin