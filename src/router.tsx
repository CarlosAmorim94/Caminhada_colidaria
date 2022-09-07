import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Payment } from "./Pages/Payment";
import { Registration } from "./Pages/Registration";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registration />} />
        <Route path="/pagamento" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};
