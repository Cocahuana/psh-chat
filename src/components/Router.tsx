import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ChatDetail from "./Chat/ChatDetail";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat/:id" element={<ChatDetail />} />
    </Routes>
  );
}

export default Router;
