import React, { useState } from "react";

interface TimeSelectorProps {
  availableHours: Array<{
    id: number;
    text: string;
  }>;
}

interface ItemProps {
  id: number;
  text: string;
  selected: boolean;
  onClick: (elementId: number) => void;
}

const Item = ({ id, text, selected, onClick }: ItemProps) => (
  <div
    className={`bg-primary-100 py-1 px-2 rounded cursor-pointer text-primary-900 font-semibold hover:bg-primary-50 ${
      selected ? "bg-primary-800 text-neutral-50 hover:bg-primary-500" : ""
    }`}
    onClick={() => onClick(id)}
  >
    <span>{text}</span>
  </div>
);

export const TimeSelector = ({ availableHours }: TimeSelectorProps) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <div className="flex gap-2">
      {availableHours.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          onClick={setSelectedItem}
          selected={selectedItem === item.id}
        />
      ))}
    </div>
  );
};
