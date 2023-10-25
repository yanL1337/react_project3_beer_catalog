import { HashRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Details from "./pages/Details";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Overview />} />
        <Route path="/beers/:id" element={<Details />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
