import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";
import { Step3 } from "./pages/Step3";
import { Step4 } from "./pages/Step4";
import { PageNotFound } from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Step1></Step1>}></Route>
        <Route path="/step2" element={<Step2></Step2>}></Route>
        <Route path="/step3" element={<Step3></Step3>}></Route>
        <Route path="/step4" element={<Step4></Step4>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
