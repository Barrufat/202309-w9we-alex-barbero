import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import getImage from "../getImage/getImage";
import AppStyled from "./AppStyled";
import NormiesPage from "../../pages/NormiesPage/NormiesPage";

const App = () => {
  return (
    <>
      <Navigation />
      <AppStyled urlImg={getImage()}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<NormiesPage />} />
          <Route path="/add" element={<Navigate to="/home" />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;