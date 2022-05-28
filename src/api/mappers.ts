import { BloodResponse } from "./types";

export const bloodMapper = (response: BloodResponse) => ({
  type: response.tipo,
  level: response.nivel_atual,
  priority: response.prioritario,
  updatedAt: response.ultima_atualizacao,
});
