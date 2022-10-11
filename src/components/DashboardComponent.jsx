import React from "react";
import deerClopsIcon from "../assets/DeerClops_Icon.webp";
import bearIcon from "../assets/Bearger_Icon.webp";
import flyIcon from "../assets/Dragonfly_Icon.webp";
import mooseGooseIcon from "../assets/Goose.webp";
import TimeLine from "./TimeLine";

const DashboardComponent = () => {
  return (
    <div className="">
      <p className="text-2xl font-bold">DST BOSS TIMER CALCULATOR</p>
      <TimeLine icon={mooseGooseIcon} defaultDay={36} currentDay={1} />
      {/* <TimeLine icon={deerClopsIcon} />
      <TimeLine icon={bearIcon} />
      <TimeLine icon={flyIcon} /> */}
    </div>
  );
};

export default DashboardComponent;
