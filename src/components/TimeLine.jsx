import { useTimer } from "react-timer-hook";

const TimeLine = ({ icon, spawnDay, defaultDay, currentDay }) => {
  // case: current day is below 36
  let daysLeft = defaultDay - currentDay;
  let timeAmount = daysLeft * 8 * 60;

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: new Date().setSeconds(
      new Date().getSeconds() + timeAmount
    ),
  });

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
