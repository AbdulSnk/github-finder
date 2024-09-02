import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main>Content</main>
        </div>
      </Router>
    </div>
  );
}

export default App;
