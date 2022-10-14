import { useState } from "react";
import deerClopsIcon from "../assets/DeerClops_Icon.webp";
import bearIcon from "../assets/Bearger_Icon.webp";
import flyIcon from "../assets/Dragonfly_Icon.webp";
import mooseGooseIcon from "../assets/Goose.webp";
import deerClops from "../assets/Deerclops.webp";
import dragonFly from "../assets/Dragonfly.webp";
import bearger from "../assets/Bearger.webp";
import TimeLine from "./TimeLine";
import CurrentDayTracker from "./CurrentDayTracker";

const DashboardComponent = () => {
  const [currentDay, setCurrentDay] = useState(1);
  return (
    <div className="m-4">
      <p className="text-4xl font-bold text-center p-4">DST BOSS TIMER</p>
      <div className="currentday-tracker-wrapper p-4">
        <CurrentDayTracker
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
      </div>
      <div className="timeline-wrapper grid grid-cols-1 gap-3">
        <TimeLine
          icon={mooseGooseIcon}
          spawnDayInput={36}
          currentDayInput={currentDay}
        />
        <TimeLine
          icon={deerClops}
          spawnDayInput={31}
          currentDayInput={currentDay}
        />
        <TimeLine
          icon={bearger}
          spawnDayInput={71}
          currentDayInput={currentDay}
        />
        <TimeLine
          icon={dragonFly}
          spawnDayInput={1}
          currentDayInput={currentDay}
        />
      </div>
    </div>
  );
};

export default DashboardComponent;
