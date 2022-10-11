import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

const TimeLine = ({ icon, spawnDayInput, defaultDay, currentDayInput }) => {
  const [currentYear, setCurrentYear] = useState(1);
  const [spawnDay, setSpawnDay] = useState(spawnDayInput);

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

  // calculate current year
  useEffect(() => {
    console.log("compare", spawnDay === currentDayInput);
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
    <div className="wrapper bg-[#6D2E46] p-8 rounded-[22px] border-2 border-black justify-center items-center w-full max-w-md">
      <div className="grid grid-cols-2 gap-6">
        <img
          className="image-wrapper bg-[#D9D9D9] rounded-[12px] border-4 border-black"
          src={icon}
        />
        <div className="data-wrapper grid text-[#CEBEBE] text-xl text-left">
          <p>time remaining</p>
          <p className="text-5xl">
            {(hours < 10 ? "0" + hours : hours) || "00"}:
            {(minutes < 10 ? "0" + minutes : minutes) || "00"}:
            {(seconds < 10 ? "0" + seconds : seconds) || "00"}
          </p>
          <p>spawns on day</p>
          <p className="text-5xl">{spawnDay || "36"}</p>
          <p>days left</p>
          <p className="text-8xl">{daysLeft || "36"}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
