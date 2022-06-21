import { useMutation, useQuery, useQueryClient } from "react-query";
import { bloodMapper, donorMapper, loginMapper } from "./mappers";
import { api } from "./services";

import {
  AppointmentPayload,
  AvailableHoursResponse,
  Blood,
  BloodResponse,
  Donor,
  DonorResponse,
  LoginResponse,
  QuizPayload,
} from "./types";

export const useGetBloodLevels = () => {
  const response = useQuery<Blood[]>("blood", () =>
    api
      .get<BloodResponse[]>("/sangue")
      .then((res) => res.data.map((item) => bloodMapper(item)))
  );

  return response;
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  const response = useMutation(
    (DonorData: Donor) =>
      api.post<DonorResponse>("/doador", donorMapper(DonorData)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("donor");
      },
    }
  );

  return response;
};

export const loginRequest = async (email: string) =>
  api
    .get<LoginResponse>(`/doador/e/${email}`)
    .then((res) => loginMapper(res.data));

export const useAvailableHoursAppointment = (date: Date) => {
  const response = useQuery<AvailableHoursResponse>(
    ["appointmentHours", date],
    () =>
      api
        .get<AvailableHoursResponse>("/agenda", {
          params: { date: date.toISOString() },
        })
        .then((res) => res.data)
  );

  return response;
};

export const submitAppointmentRequest = (payload: AppointmentPayload) =>
  api.post("/agenda", {
    agendamento: payload.date,
    doadorId: payload.donorId,
  });

const isTrueSet = (value: any) => value === "true";

export const submitQuizRequest = (payload: QuizPayload) =>
  api.post("/questionario", {
    id_doador: payload.donorId,
    bebidaAlcolica: isTrueSet(payload.alcohol),
    resfriadoGripado: isTrueSet(payload.cold),
    febre: isTrueSet(payload.fever),
    dorPeito: isTrueSet(payload.chestPain),
    testeHiv: false, // remover
    suspeitaCovid: isTrueSet(payload.covid),
    desmaio: false, // remover
    convulsao: false,
    derrame: isTrueSet(payload.heartAttack),
    dengue: isTrueSet(payload.dengue),
    ist: isTrueSet(payload.std),
    zika: isTrueSet(payload.zika),
    cancer: isTrueSet(payload.cancer),
    drogasIlicitas: isTrueSet(payload.drugs),
    fuma: isTrueSet(payload.smoke),
    sexoSemProtecao: isTrueSet(payload.sexWithoutProtection),
    gravida: isTrueSet(payload.pregnancy),
    sexoPago: false, // remover
    sexoEntreHomens: isTrueSet(payload.sexWithAnotherMan),
    parto: isTrueSet(payload.childbirth),
    amamentando: isTrueSet(payload.breastFeeding),
  });
