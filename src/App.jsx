import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Visualiser from "./pages/Visualiser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/visualizer" element={<Visualiser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
