import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import './App.css';
import About from './page/About';
import Footer from './components/common/Footer';
import Sponsors from './page/Sponsors';
import Location from './page/Location';
// import Events from './page/Events';
import EventSection from './page/EventSection';
import EventInfo from './page/EventInfo';
import Schedule from './page/Schedule';
import TermsAndConditions from './page/Terms';
import GetPasses from './page/GetPasses';
import BuyPass from './page/BuyPass';
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
        <About />
        <Footer />
      </>
  },
  {
    path: "/sponsors",
    element: (
      <>
        <Sponsors />
        <Footer />
      </>
    ),
  },
  {
    path: "/location",
    element: (
      <>
        <Location />
        <Footer />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <EventSection />
        <Footer />
      </>
    ),
  },
  // {
  //   path: "/events/:events",
  //   element: (
  //     <>
  //       <Events />
  //       <Footer />
  //     </>
  //   ),
  // },
  {
    path: "/events/:eventId",
    element: <EventInfo />,
  },
  {
    path: "/schedule",
    element: (
      <>
        <Schedule />
        <Footer />
      </>
    ),
  },
  {
    path: "/getPasses",
    element: (
      <>
        <GetPasses />
        <Footer />
      </>
    ),
  },
  {
    path: "/buyPass/:pass",
    element: (
      <>
        <BuyPass />
        <Footer />
      </>
    ),
  },
  {
    path: "/termsandconditions",
    element: (
      <>
        <TermsAndConditions />
        <Footer />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
