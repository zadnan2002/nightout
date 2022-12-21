import logo from './logo.svg';
import Login from "./Login";
import Signup from './Signup';
import './App.css';
import VSignup from './VSignup';
import Home from './Home';
import EventSignup from './EventSignup';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom' ;
import Admin from './Admin';
import VenuePage from './VenuePage.js';
import AppAppBar from './modules/views/AppAppBar';
import ResponsiveAppBar from './modules/views/ResponsiveAppBar';



function App() {
 
  return (
   
    <Router>
      <div className="App">
      <ResponsiveAppBar/>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signUp' element={<Signup/>}/>
      <Route exact path='/VsignUp' element={<VSignup/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/VenueControl' element={<VenuePage/>}/>
      <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
    </div></Router>
  //FOR HOME CHECK VALID LOGIN VALUES THEN REDIRECT ROUTE LINK>>>>
  );
}
export default App;
