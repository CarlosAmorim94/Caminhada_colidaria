import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
