import React from "react";
import { BloodItem } from "./BloodItem";

interface BloodBankProps {
  content: Array<{
    id: number;
    type: string;
    level: number;
  }>;
}

export const BloodBank = ({ content }: BloodBankProps) => {
  return (
    <div>
      <h2 className="text-xl my-2 text-center text-primary-900 mb-8">
        Níveis do Banco de Sangue
      </h2>
      <div className="grid grid-cols-4 gap-8 items-center">
        {content.map((item) => (
          <BloodItem key={item.id} title={item.type} value={item.level} />
        ))}
      </div>
    </div>
  );
};
