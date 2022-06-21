import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import brLocale from "date-fns/locale/pt-BR";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "@fontsource/inter";

import { Routes } from "./pages";
import "./styles/main.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={brLocale}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </LocalizationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
