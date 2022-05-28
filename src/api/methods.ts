import { useQuery } from "react-query";
import { bloodMapper } from "./mappers";
import { api } from "./services";
import { Blood, BloodResponse } from "./types";

export const useGetBloodLevels = () => {
  const response = useQuery<Blood[]>("blood", () =>
    api
      .get<BloodResponse[]>("/sangue")
      .then((res) => res.data.map((item) => bloodMapper(item)))
  );

  return response;
};
