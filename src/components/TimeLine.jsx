import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import LastDefeated from "./LastDefeated";

const TimeLine = ({ icon, spawnDayInput, defaultDay, currentDayInput }) => {
  const [currentYear, setCurrentYear] = useState(1);
  const [spawnDay, setSpawnDay] = useState(spawnDayInput);
  const [lastDefeated, setLastDefeated] = useState(0);

  // calculate days left
  if (parseInt(currentDayInput) > parseInt(spawnDay)) {
    setSpawnDay(spawnDay + 70 * currentYear);
  }
  let daysLeft = spawnDay - currentDayInput;

  // calculate amount of time left
  let timeAmount = daysLeft * 8 * 60;

  let timerCountdown = new Date().setSeconds(
    new Date().getSeconds() + timeAmount
  );

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: timerCountdown,
  });

  useEffect(() => {
    // calculate current year
    if (parseInt(currentDayInput) % 70 === 0) {
      setCurrentYear(currentDayInput / 70);
    } else {
      setCurrentYear(Math.floor(currentDayInput / 70) + 1);
    }

    if (!currentDayInput) {
      setSpawnDay(spawnDayInput);
    }

    if (parseInt(spawnDay) === parseInt(currentDayInput)) {
      setSpawnDay(spawnDay + 70);
    }

    const updatedTimerCountdown = new Date().setSeconds(
      new Date().getSeconds() + timeAmount
    );
    restart(updatedTimerCountdown);
  }, [currentDayInput]);

  return (
    <div className="wrapper bg-[#6D2E46] py-6 px-8 rounded-[25px] shadow-md border-1 border-grey-700 justify-center items-center w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-row-2 gap-2">
          <img
            className="image-wrapper max-h-[160px] bg-gradient-to-t from-gray-400 to-[#D5B9B2] rounded-[12px] border-4 border-black"
            src={icon}
          />
          <LastDefeated
            lastDefeated={lastDefeated}
            setLastDefeated={setLastDefeated}
          />
        </div>

        <div className="data-wrapper grid text-base sm:text-xl text-[#CEBEBE] p-2 text-left">
          <p>Time Remaining</p>
          <p className="text-4xl sm:text-5xl">
            {(hours < 10 ? "0" + hours : hours) || "00"}:
            {(minutes < 10 ? "0" + minutes : minutes) || "00"}:
            {(seconds < 10 ? "0" + seconds : seconds) || "00"}
          </p>
          <p>Spawns on Day</p>
          <p className="text-4xl sm:text-6xl">{spawnDay || "36"}</p>
          <p>Days Left</p>
          <p className="text-8xl">{daysLeft || "36"}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
