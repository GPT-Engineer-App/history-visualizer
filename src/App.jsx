import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Learn from "./pages/Learn.jsx";
import Relationships from "./pages/Relationships.jsx";
import Timelines from "./pages/Timelines.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/relationships" element={<Relationships />} />
        <Route exact path="/timelines" element={<Timelines />} />
      </Routes>
    </Router>
  );
}

export default App;