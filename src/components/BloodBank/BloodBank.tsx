import React from "react";
import { BloodItem } from "./BloodItem";

interface BloodBankProps {
  content: Array<{
    id: number;
    type: string;
    level: string;
  }>;
}

export const BloodBank = ({ content }: BloodBankProps) => {
  return (
    <div>
      <h2 className="text-xl my-2 text-center text-primary-900">
        Níveis do Banco de Sangue
      </h2>
      {content.map((item) => (
        <BloodItem key={item.id} title={item.type} value={item.level} />
      ))}
    </div>
  );
};
