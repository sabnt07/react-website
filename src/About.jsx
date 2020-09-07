import React from "react";
import web from "../src/images/about-img.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Hello! This is Tuitui"
        brandname ="Sabin."
        text = "Hi! I am Creative Freelance Web Designer, Graphic Designer and Web Developer from Nepal. I am energetic and like to design wonderful, instinctive and useful websites that live on the web."
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
