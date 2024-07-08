import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./components/Router.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/theme.ts";
import GlobalStyle from "./assets/theme/globalStyles.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
