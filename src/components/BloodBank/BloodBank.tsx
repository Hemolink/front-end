import React from "react";

import { BloodItem } from "./BloodItem";
import { LoadingFeedback } from "../Feedback";

interface BloodBankProps {
  content: Array<{
    type: string;
    level: number;
  }>;
  isLoading: boolean;
}

export const BloodBank = ({ content, isLoading }: BloodBankProps) => (
  <div>
    <h2 className="text-2xl my-2 text-center text-primary-900 mb-8">
      Níveis do Banco de Sangue
    </h2>
    {!isLoading && (
      <div className="grid grid-cols-4 gap-8 items-center">
        {content.map((item) => (
          <BloodItem key={item.type} title={item.type} value={item.level} />
        ))}
      </div>
    )}
    {isLoading && <LoadingFeedback />}
  </div>
);
