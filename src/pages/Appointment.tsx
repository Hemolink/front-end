import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Button } from "../components";
import { useAvailableHoursAppointment } from "../api";
import { TimeSelector } from "../components/TimeSelector";
import { useNavigate } from "react-router-dom";
import { route } from ".";
import { useAppointmentData } from "../hooks";

export const Appointment = () => {
  const [dateSelected, setDateSelected] = useState<Date>(new Date());
  const [timeSelected, setTimeSelected] = useState<number>(-1);
  const { data, isLoading } = useAvailableHoursAppointment(dateSelected);
  const { setDate } = useAppointmentData();
  const navigate = useNavigate();

  const availableHours =
    data?.map((item, index) => ({
      id: index,
      text: new Intl.DateTimeFormat("pt-BR", {
        hour: "numeric",
        minute: "numeric",
      }).format(new Date(item)),
      date: new Date(item),
    })) ?? [];

  const onNext = () => {
    const date = availableHours[timeSelected].date;
    setDate(date);

    navigate(route.quiz);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-6 h-full font-display">
        <section className=" text-neutral-900 col-span-3 p-6 text-lg">
          <h2 className="text-2xl mb-8">Informações importantes</h2>
          <p className="text-lg">
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
              <a href="http://www.hemominas.mg.gov.br/doacao-e-atendimento-ambulatorial/doacao-de-sangue/orientacoes-sobre-doacao#doacao-de-sangue-por-pessoas-de-16-17-e-acima-de-60-anos">
                clicando aqui
              </a>
              .
            </li>
            <li>
              Quem já doou, deve observar o prazo entre doações de sangue.
              Homens: 60 dias e até 4 vezes por ano; Mulheres: 90 dias e até 3
              vezes por ano.
            </li>
            <li>
              Saiba mais sobre os critérios adicionais para a doação de sangue
              referentes ao COVID-19,
              <a href="http://www.hemominas.mg.gov.br/destaques/3452-doacao-de-sangue-novas-orientacoes">
                clicando aqui
              </a>
              .
            </li>
            <li>
              Para saber as condições e restrições para a doação de sangue,
              <a href="http://www.hemominas.mg.gov.br/doacao-e-atendimento-ambulatorial/doacao-de-sangue/condicoes-e-restricoes">
                clicando aqui
              </a>
              .
            </li>
            <li>
              Para mais informações sobre este serviço,
              <a href="https://www.mg.gov.br/servico/doar-sangue">
                clicando aqui
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="content-center p-6 col-span-2 bg-primary-600 text-light">
          <h4 className="font-medium text-2xl pb-2 mb-8">Agende seu horário</h4>

          <div className="flex flex-col">
            <p className="block mb-2 text-sm font-display">Data</p>
            <DatePicker
              value={dateSelected}
              onChange={(newValue) => {
                setDateSelected(newValue ?? new Date());
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
                />
              )}
            />
          </div>

          <TimeSelector
            selectedId={timeSelected}
            onSelect={setTimeSelected}
            availableHours={availableHours}
            isLoading={isLoading}
          />

          <div className="flex justify-end">
            <Button className="font-bold" onClick={onNext}>
              Avançar
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
