import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./components/App.tsx";
import { FavouritesProvider } from "./contexts/FavouritesContext.tsx";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FavouritesProvider>
          <App />
        </FavouritesProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
