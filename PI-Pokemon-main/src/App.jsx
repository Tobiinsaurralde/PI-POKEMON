import LandingPage from "../src/views/landingPage/LandingPage";


//dependences
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;