import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import errorAnimation from "./error-animation.json";

type Props = {
  onComplete?: () => void;
};

export const ErrorFeedback = ({ onComplete }: Props) => {
  return (
    <Player
      src={errorAnimation}
      autoplay
      keepLastFrame
      onEvent={(event: string) => {
        if (event === "complete") onComplete?.();
      }}
      style={{ height: "300px", width: "300px" }}
    />
  );
};
