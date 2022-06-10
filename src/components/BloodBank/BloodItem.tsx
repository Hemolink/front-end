import React from "react";

import Blood00 from "../../assets/bloodLevel/00.svg";
import Blood20 from "../../assets/bloodLevel/20.svg";
import Blood40 from "../../assets/bloodLevel/40.svg";
import Blood60 from "../../assets/bloodLevel/60.svg";
import Blood80 from "../../assets/bloodLevel/80.svg";
import Blood100 from "../../assets/bloodLevel/100.svg";

interface BloodItemProps {
  title: string;
  value: number;
}

const levels = {
  0: {
    imageSource: Blood00,
    caption: "Nível de sangue muito baixo",
  },
  20: {
    imageSource: Blood20,
    caption: "Nível de sangue baixo",
  },
  40: {
    imageSource: Blood40,
    caption: "Nível de sangue razoável",
  },
  60: {
    imageSource: Blood60,
    caption: "Nível de sangue razoável",
  },
  80: {
    imageSource: Blood80,
    caption: "Nível de sangue alto",
  },
  100: {
    imageSource: Blood100,
    caption: "Nível de sangue máximo",
  },
};

export const BloodItem = ({ title, value }: BloodItemProps) => {
  const closestLevel = Object.keys(levels)
    .map(Number)
    .reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );

  const { imageSource, caption } = levels[closestLevel as keyof typeof levels];

  return (
    <div
      className="flex flex-col items-center hover:opacity-80"
      title={caption}
    >
      <span className="cursor-default mb-2 font-bold">{title}</span>
      <img src={imageSource} alt={caption} width={60} />
    </div>
  );
};
