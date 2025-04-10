import React from "react";
import Links from "./Links";

function About(props) {
  console.log('links in about', props.links)
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
