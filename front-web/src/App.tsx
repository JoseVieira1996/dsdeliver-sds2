import './App.css';
//import Navbar from './Navbar/Index';
import Routes from './Routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

function App() {
  return (
    <>
    <Routes />
    <ToastContainer/>
    </>
  );
}

export default App;
