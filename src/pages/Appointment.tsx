import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import { Button } from "../components";
import { TimeSelector } from "../components/TimeSelector";

interface Props {}

const mock = [
  {
    id: 1,
    text: "8:00",
  },
  {
    id: 2,
    text: "9:00",
  },
  {
    id: 3,
    text: "10:00",
  },
];

export const Appointment = ({}: Props) => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <div className="grid grid-cols-2">
      <section>
        <h2>Agendamento</h2>
        <DatePicker
          label="Data"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" />}
        />
        <TimeSelector availableHours={mock} />
        <Button>Agendar</Button>
      </section>
      <section>
        <h2>Informações importantes</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo delectus
          ipsum architecto quisquam pariatur magnam qui temporibus placeat iste
          ratione, nam dignissimos fugiat quos vitae quasi blanditiis facere
          unde. Esse.
        </p>
      </section>
    </div>
  );
};
