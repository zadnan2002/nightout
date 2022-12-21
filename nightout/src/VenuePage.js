import AppAppBar from './modules/views/AppAppBar';
import React from 'react'
import './VenuePage.css';
import EventSignup from './EventSignup';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { Box } from '@mui/system';
import Typography from './modules/components/Typography';
import DataTable4 from './DataTable4';
import DataTable5 from './DataTable5';
import DataTable6 from './DataTable6';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
  
    const token = localStorage.getItem('token');


    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function VenuePage() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const token = localStorage.getItem('token');
  
if(token!=="tV001"){
window.location.replace('/');
}
else
    return (

    <div>
       
       <Box sx={{height:"90vh", width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  textColor="secondary" indicatorColor="secondary" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Event Registration Form" {...a11yProps(0)} />
          <Tab label="Event Control Portal" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     <EventSignup/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       
      <div style={{ height: "100%", width: '100%',marginBottom:"80px" }}>
  <br/>
  <Typography variant='h5' align='left'>
Active Events
    </Typography>
<DataTable4 />

</div>
<div style={{ height: "100%", width: '100%',marginBottom:"80px" }}>
  <br/>
  <Typography variant='h5' align='left'>
Event Requests
    </Typography>
<DataTable5 />

</div>

<div style={{ height: "100%", width: '100%' }}>
  <br/>
  <Typography variant='h5' align='left'>
Customer Tickets
    </Typography>
<DataTable6 />

</div>
      </TabPanel>
      
    </Box>

    

    </div>
  )







}

export default VenuePage






