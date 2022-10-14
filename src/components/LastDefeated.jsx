import { useState } from "react";

const LastDefeated = ({ lastDefeated, setLastDefeated }) => {
  const [editableDay, setEditableDay] = useState(false);
  const [lastDefeatedInput, setLastDefeatedInput] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setLastDefeated(e.target.value);
    }
  };

  return (
    <div className="text-left">
      <p className="text-base font-bold text-[#CEBEBE] p-2">Last Defeated</p>
      {editableDay ? (
        <input
          className="h-10 border-2 shadow appearance-none bg-gradient-to-b from-white via-white to-gray-300 border-black text-3xl text-center rounded focus:outline-none focus:shadow-outline w-full leading-tight"
          value={lastDefeatedInput}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            if (e === "") setLastDefeatedInput("");
            setLastDefeatedInput(e.target.value);
          }}
        />
      ) : (
        <div
          className="h-10 border-2 shadow appearance-none bg-gradient-to-b from-white via-white to-gray-300  border-black text-3xl text-center rounded focus:outline-none focus:shadow-outline w-full leading-tight"
          onClick={() => setEditableDay(!editableDay)}
        >
          {lastDefeated}
        </div>
      )}
    </div>
  );
};

export default LastDefeated;
