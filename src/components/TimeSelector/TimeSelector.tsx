import React from "react";
import { LoadingFeedback } from "../Feedback";

interface TimeSelectorProps {
  availableHours: Array<{
    id: number;
    text: string;
  }>;
  isLoading?: boolean;
  onSelect: (id: number) => void;
  selectedId: number;
}

interface ItemProps {
  id: number;
  text: string;
  selected: boolean;
  onClick: (elementId: number) => void;
}

const Item = ({ id, text, selected, onClick }: ItemProps) => (
  <div
    className={`bg-primary-100 py-1 px-2 rounded text-center cursor-pointer text-primary-900 font-semibold hover:bg-primary-50 ${
      selected ? "bg-primary-800 text-neutral-50 hover:bg-primary-500" : ""
    }`}
    onClick={() => onClick(id)}
  >
    <p>{text}</p>
  </div>
);

export const TimeSelector = ({
  availableHours,
  isLoading,
  selectedId,
  onSelect,
}: TimeSelectorProps) => (
  <div className="my-8 flex flex-col">
    <p className="block mb-2 text-sm font-display">Horários disponíveis</p>
    {isLoading && <LoadingFeedback />}
    {!isLoading && (
      <div className="grid  grid-cols-6 gap-2">
        {availableHours.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            text={item.text}
            onClick={onSelect}
            selected={selectedId === item.id}
          />
        ))}
      </div>
    )}
  </div>
);
