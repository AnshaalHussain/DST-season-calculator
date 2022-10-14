import { useState } from "react";

const CurrentDayTracker = ({ currentDay, setCurrentDay }) => {
  const [editableTitle, setEditableTitle] = useState(false);
  const [currentDayInput, setCurrentDayInput] = useState();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCurrentDay(e.target.value);
    }
  };

  return (
    <div className="currentday-wrapper w-1/2 text-left">
      <p className="text-lg font-bold ">Current Day</p>
      {editableTitle ? (
        <input
          className="h-15 border-2 shadow appearance-none bg-white border-black text-4xl text-center rounded focus:outline-none focus:shadow-outline w-full leading-tight"
          value={currentDayInput}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            if (e === "") setCurrentDayInput("");
            setCurrentDayInput(e.target.value);
          }}
        />
      ) : (
        <div
          className="h-15 border-2 shadow appearance-none bg-white border-black text-4xl text-center rounded focus:outline-none focus:shadow-outline w-full leading-tight"
          onClick={() => setEditableTitle(!editableTitle)}
        >
          {currentDay || 1}
        </div>
      )}
    </div>
  );
};

export default CurrentDayTracker;
<input></input>;
