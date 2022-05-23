import React from "react";
import Demo from "./Demo";
import Eduction from "./Eduction";
import Myskill from "./Myskill";
import PersonalInformation from "./PersonalInformation";

const MyPortfolio = () => {
  return (
    <div>
      <PersonalInformation></PersonalInformation>
      <Myskill></Myskill>
      <Eduction></Eduction>
      <Demo></Demo>
    </div>
  );
};

export default MyPortfolio;
