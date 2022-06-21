import { BloodResponse, Donor, LoginResponse } from "./types";

export const bloodMapper = (response: BloodResponse) => ({
  type: response.tipo,
  level: response.nivel_atual,
  priority: response.prioritario,
  updatedAt: response.ultima_atualizacao,
});

export const donorMapper = (input: Donor) => ({
  nome: input.name,
  sobrenome: input.surname,
  dataNascimento: new Date(input.birthDate).toISOString(),
  email: input.email,
  senha: input.password,
  sangueId: input.bloodType,
  cpf: input.cpf,
  sexo: input.sex,
  peso: input.weight,
});

export const loginMapper = (response: LoginResponse) => ({
  id: response.idDoador,
  password: response.senha,
  name: response.nome,
});
