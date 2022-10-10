import { useTimer } from "react-timer-hook";

const TimeLine = ({ icon, daysLeft, spawnDay }) => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: new Date().setSeconds(new Date().getSeconds() + 3600),
    onExpire: () => alert("timer expired"),
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
            {hours || "00"}:{minutes || "00"}:{seconds || "00"}
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
