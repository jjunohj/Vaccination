import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/";
import SelectPage from "./pages/select";
import Statistics from "./pages/getStatistics";
import AllMedicalInstitution from "./pages/getAllPlace";
import NationalMedicalInstitution from "./pages/getNationalPlace";
import MyMedicalRecords from "./pages/getRecords";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/nearby" element={<AllMedicalInstitution />} />
        <Route path="/nearbyNation" element={<NationalMedicalInstitution />} />
        <Route path="/myRecords" element={<MyMedicalRecords />} />
        <Route path="/statistic" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
