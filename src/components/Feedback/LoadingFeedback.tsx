import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import loadingAnimation from "./loading-animation.json";

type Props = {};

export const LoadingFeedback = (props: Props) => {
  return (
    <Player
      src={loadingAnimation}
      autoplay
      loop
      style={{ height: "300px", width: "300px" }}
    />
  );
};
