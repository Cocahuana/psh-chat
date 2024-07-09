import { Route, Routes } from "react-router-dom";
import App from "../App";
import ChatDetail from "./Chat/ChatDetail";
import Test from "./test";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/chat/:id" element={<ChatDetail />} />
      </Route>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default Router;
