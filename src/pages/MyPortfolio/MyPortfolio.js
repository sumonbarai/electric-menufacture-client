import React from "react";
import Eduction from "./Eduction";
import Myskill from "./Myskill";
import PersonalInformation from "./PersonalInformation";

const MyPortfolio = () => {
  return (
    <div>
      <PersonalInformation></PersonalInformation>
      <Myskill></Myskill>
      <Eduction></Eduction>
    </div>
  );
};

export default MyPortfolio;
