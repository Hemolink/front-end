import { useMutation, useQuery, useQueryClient } from "react-query";
import { bloodMapper, donorMapper, loginMapper } from "./mappers";
import { api } from "./services";

import {
  Blood,
  BloodResponse,
  Donor,
  DonorResponse,
  LoginResponse,
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

// export const useLogin = () => {
//   const queryClient = useQueryClient();

//   const response = useMutation(
//     (email: string) =>
//       api
//         .get<LoginResponse>(`/doador/e/${email}`)
//         .then((res) => loginMapper(res.data)),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("donor");
//       },
//     }
//   );

//   return response;
// };

export const loginRequest = async (email: string) =>
  api
    .get<LoginResponse>(`/doador/e/${email}`)
    .then((res) => loginMapper(res.data));
