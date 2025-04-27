
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import { createTheme,ThemeProvider } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {indigo} from '@mui/material/colors';


import Home from './pages/home';

const theme=createTheme({
  palette:{
    primary:deepOrange,
    secondary:indigo,
  text:{
    primary:'#08012e',
    secondary:'#fff',
  },
  
    
  },
  typography:{
    fontFamily:'Manrope'
  },
  text:{
    primary:'#08012e',
    secondary:'#fff',
  },
});



function App() {
 

  return (
    <ThemeProvider theme={theme}>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
   </Routes>
   </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
