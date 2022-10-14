import { useState } from "react";

const LastDefeated = ({ lastDefeated, setLastDefeated }) => {
  const [editableTitle, setEditableTitle] = useState(false);

  return (
    <div className="currentday-wrapper text-left">
      <p className="text-lg font-bold text-[#CEBEBE]">Last Defeated</p>
      {editableTitle ? (
        <input
          className="h-10 max-w-[30] border-1 bg-white border-black text-4xl text-center rounded-[12px]"
          value={lastDefeated}
          onChange={(e) => setLastDefeated(e.target.value)}
        />
      ) : (
        <div
          className="h-10 max-w-[30] border-2 bg-white border-black text-4xl text-center rounded-[12px]"
          onClick={() => setEditableTitle(!editableTitle)}
        >
          {lastDefeated || null}
        </div>
      )}
    </div>
  );
};

export default LastDefeated;
