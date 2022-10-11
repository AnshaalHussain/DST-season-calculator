import { useState } from "react";
import deerClopsIcon from "../assets/DeerClops_Icon.webp";
import bearIcon from "../assets/Bearger_Icon.webp";
import flyIcon from "../assets/Dragonfly_Icon.webp";
import mooseGooseIcon from "../assets/Goose.webp";
import TimeLine from "./TimeLine";
import CurrentDayTracker from "./CurrentDayTracker";

const DashboardComponent = () => {
  const [currentDay, setCurrentDay] = useState(1);
  return (
    <div className="">
      <p className="text-4xl font-bold text-left p-4">DST BOSS TIMER</p>
      <div className="tracker-wrapper p-4">
        <CurrentDayTracker
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
      </div>

      <TimeLine
        icon={mooseGooseIcon}
        spawnDayInput={36}
        currentDayInput={currentDay}
      />

      {/* <TimeLine icon={deerClopsIcon} />
      <TimeLine icon={bearIcon} />
      <TimeLine icon={flyIcon} /> */}
    </div>
  );
};

export default DashboardComponent;
