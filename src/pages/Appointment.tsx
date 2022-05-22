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
    <>
      {/* <h1 className="text-3xl my-5 ">Agendamento</h1> */}
      <div className="grid grid-cols-2 ">
        <section className="content-center">
          <DatePicker
            label="Data"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
          <TimeSelector availableHours={mock} />
          <Button>Agendar</Button>
        </section>
        <section className=" text-primary-900">
          <h2 className="text-2xl my-8 text-center">Informações importantes</h2>
          <p className="text-xl">
            O preenchimento do e-mail não é obrigatório. Porém, ao informá-lo
            você receberá uma mensagem com todos os dados do agendamento
            realizado. É necessário guardar o número de protocolo para consultar
            ou cancelar seu agendamento. Comparecer à unidade com, no mínimo, 15
            minutos de antecedência em relação ao horário agendado.
          </p>
          <ul className="list-disc ml-5">
            <li>
              A idade para doação de sangue é entre 16 e 69 anos. Jovens de 16 e
              17 anos e maiores de 60 anos devem consultar condições especiais
              clicando aqui.
            </li>
            <li>
              Quem já doou, deve observar o prazo entre doações de sangue.
              Homens: 60 dias e até 4 vezes por ano; Mulheres: 90 dias e até 3
              vezes por ano.
            </li>
            <li>
              Saiba mais sobre os critérios adicionais para a doação de sangue
              referentes ao COVID-19, clicando aqui.
            </li>
            <li>
              Para saber as condições e restrições para a doação de sangue,
              clique aqui.
            </li>
            <li>Para mais informações sobre este serviço, clique aqui.</li>
          </ul>
        </section>
      </div>
    </>
  );
};
