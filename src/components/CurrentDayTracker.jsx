import { useState } from "react";

const CurrentDayTracker = ({ currentDay, setCurrentDay }) => {
  const [editableTitle, setEditableTitle] = useState(false);
  return (
    <div className="currentday-wrapper text-left">
      <p className="text-lg font-bold ">Current Day</p>
      {editableTitle ? (
        <input
          className="h-20 max-w-[30] border-2 bg-white border-black text-4xl text-center rounded-[12px]"
          value={currentDay}
          onChange={(e) => setCurrentDay(e.target.value)}
        />
      ) : (
        <div
          className="h-20 max-w-[30] border-2 bg-white border-black text-4xl text-center rounded-[12px]"
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
