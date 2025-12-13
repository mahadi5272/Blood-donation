import React from "react";
import { Link } from "react-router";
import Banner from "./Home/Banner";
import Featured from "./Home/Featured";
import Contact from "./Home/Contact";

const Home = () => {
  return <>
  {/* banner */}
  <Banner></Banner>

  {/* featured */}
  <Featured></Featured>

  {/* contact */}
  <Contact></Contact>
  </>;
};

export default Home;
