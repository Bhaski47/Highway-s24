// import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./page/Home";
import './App.css';
import About from './page/About';
import Footer from './components/common/Footer';
import Sponsors from './page/Sponsors';
import Location from './page/Location';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Home/>,
    },
    {
      path:"/about",
      element:
      <>
      <About/>
      <Footer/>
      </>
    },
    {
      path:"/sponsors",
      element:
      <>
      <Sponsors/>
      <Footer/>
      </>
    },
    {
      path:"/location",
      element:
      <>
      <Location/>
      <Footer/>
      </>
    },
  ]
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
