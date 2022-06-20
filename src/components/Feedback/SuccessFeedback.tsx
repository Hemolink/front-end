import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import successAnimation from "./success-animation.json";

type Props = {
  onComplete?: () => void;
};

export const SuccessFeedback = ({ onComplete }: Props) => {
  return (
    <Player
      src={successAnimation}
      autoplay
      keepLastFrame
      onEvent={(event: string) => {
        if (event === "complete") onComplete?.();
      }}
      style={{ height: "300px", width: "300px" }}
    />
  );
};
