import React from "react";
import web from "../src/images/home-img.png";
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common
        name="Build your website from"
        brandname ="React.JS"
        text = "{A JavaScript library for building user interfaces. We are Component Based to reduce your code.}"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
