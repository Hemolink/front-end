import React from "react";

interface BloodItemProps {
  title: string;
  value: string;
}

export const BloodItem = ({ title, value }: BloodItemProps) => {
  let valueNumber = 0;

  switch (value) {
    case "low":
      valueNumber = 10;
      break;
    case "medium":
      valueNumber = 50;
      break;
    case "high":
      valueNumber = 90;
      break;
  }

  return (
    <div>
      <span>{title}</span>
      <progress value={valueNumber} max="100">
        {valueNumber} %
      </progress>
    </div>
  );
};
