import React from "react";

interface RadioItemProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: boolean;
  name: string;
  register: any;
}

interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  title: string;
  options: {
    label: string;
    value: boolean;
  }[];
  name: string;
  register: any;
  errorMessage?: string;
}

const RadioItem = ({
  label,
  value,
  register,
  name,
  ...others
}: RadioItemProps) => {
  return (
    <div className="flex items-center">
      <label className="flex items-center gap-1 text-sm font-medium text-gray-900">
        <input
          type="radio"
          value={String(value)}
          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          {...others}
          {...register(name)}
        />
        {label}
      </label>
    </div>
  );
};

export const Radio = ({
  options,
  title,
  errorMessage,
  ...others
}: RadioProps) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <p>{title}</p>
      <div className="flex  gap-4">
        {options.map((option) => (
          <RadioItem key={option.label} {...option} {...others} />
        ))}
      </div>
      {errorMessage && <div className="text-sm ">{errorMessage}</div>}
    </fieldset>
  );
};
