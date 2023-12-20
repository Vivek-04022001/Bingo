import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Questions from "./pages/Questions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/questions" element={<Questions />} />
      </Route>
    </Routes>
  );
}

export default App;
