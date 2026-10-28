import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import LoginBootstrap from "./components/LoginBootstrap";
import LoginTailwind from "./components/LoginTailwind";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<LoginTailwind />} />
        <Route path="/bootstrap" element={<LoginBootstrap />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
