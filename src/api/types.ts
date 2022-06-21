export interface BloodResponse {
  tipo: string;
  nivel_atual: number;
  prioritario: boolean;
  ultima_atualizacao: string;
}

export interface Blood {
  type: string;
  level: number;
  priority: boolean;
  updatedAt: string;
}

export interface Donor {
  name: string;
  surname: string;
  birthDate: string;
  bloodType: string;
  cpf: string;
  email: string;
  password: string;
  sex: string;
  weight: number;
}

export interface DonorRequest {
  nome: String;
  sobrenome: string;
  dataNascimento: string;
  email: string;
  senha: string;
  sangueId: string;
  cpf: string;
  sexo: string;
  peso: number;
}

export interface DonorResponse {
  idDoador: number;
  nome: string;
  sobrenome: string;
  dataNascimento: string;
  email: string;
  senha: string;
  sangueId: string;
  cpf: string;
  ultimaDoacao: string;
  sexo: string;
  peso: number;
}

export interface LoginResponse {
  idDoador: number;
  senha: string;
  nome: string;
}

export type AvailableHoursResponse = string[];
