import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Image"
            />
            <Typography>Prasad Iyer</Typography>
            <a href="prasad-iyer.onrender.com">Visit Portfolio</a>
            <span>
              This is a sample wesbite made by Prasad.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact</Typography>
            <h2>Email: prasadiyer25@gmail.com</h2>
            <h2>Phone no: 8779849708</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
