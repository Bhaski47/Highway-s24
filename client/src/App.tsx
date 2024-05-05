import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import "./App.css";
import About from "./page/About";
import Footer from "./components/common/Footer";
import Sponsors from "./page/Sponsors";
import Location from "./page/Location";
import ReactGA from "react-ga4";
import EventSection from "./page/EventSection";
import EventInfo from "./page/EventInfo";
import Schedule from "./page/Schedule";
import TermsAndConditions from "./page/Terms";
import GetPasses from "./page/GetPasses";
import BuyPass from "./page/BuyPass";
import { useEffect } from "react";
import TechTeam from "./page/TechTeam";
import PageNotFound from "./page/PageNotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/about",
    errorElement: <PageNotFound />,
    element: (
      <>
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/sponsors",
    errorElement: <PageNotFound />,
    element: (
      <>
        <Sponsors />
        <Footer />
      </>
    ),
  },
  {
    path: "/location",
    errorElement: <PageNotFound />,
    element: (
      <>
        <Location />
        <Footer />
      </>
    ),
  },
  {
    path: "/events/:selectedDay",
    element: (
      <>
        <EventSection />
        <Footer />
      </>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/team",
    errorElement: <PageNotFound />,
    element: (
      <>
        <TechTeam />
        <Footer />
      </>
    ),
  },
  {
    path: "/events/:selectedDay/:eventId",
    element: <EventInfo />,
    errorElement: <PageNotFound />,
  },

  {
    path: "/schedule",
    element: (
      <>
        <Schedule />
        <Footer />
      </>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/getPasses",
    element: (
      <>
        <GetPasses />
        <Footer />
      </>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/buyPass/:passId",
    element: (
      <>
        <BuyPass />
        <Footer />
      </>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/termsandconditions",
    errorElement: <PageNotFound />,
    element: (
      <>
        <TermsAndConditions />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  useEffect(() => {
    ReactGA.initialize("G-BFYLR90T4L ");
    ReactGA.send({
      hitType: "pageview",
      page: "/landingpage",
      title: "Landing Page",
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
