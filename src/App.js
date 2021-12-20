import React from "react";
import "./style.css";
import Topbar from "./topBar";
import Objective from "./objective";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Interests from "./interests";
import SoftSkills from "./softSkills";

export default function App() {
  return (
    <>
    <Topbar />
    <Objective />
    <Experience />
    <Education />
    <Skills />
    <Interests/>
    <SoftSkills />
    </>
  );
}
