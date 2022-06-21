import create from "zustand";

export interface AppointmentStoreType {
  date: Date | null;
  setDate: (date: Date) => void;
}

export const useAppointmentData = create<AppointmentStoreType>((set) => ({
  date: null,
  setDate: (date: Date) => set((state) => ({ ...state, date })),
}));
