import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import LoginPage from "./Pages/LoginPage.js";

 function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
export default App;