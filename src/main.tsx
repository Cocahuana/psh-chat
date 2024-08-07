import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/theme.ts";
import GlobalStyle from "./assets/theme/globalStyles.ts";
import Router from "./components/Router.tsx";
import { ChatProvider } from "./context/ChatContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChatProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ChatProvider>
  </React.StrictMode>
);
