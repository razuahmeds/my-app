import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Array from "./components/Array";
import Login from "./components/Login";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card-info" element={<Array />} />
        <Route path="/card-details/:name" element={<CardDetails />} />
        <Route
          path="*"
          element={
            <div>
              <h2>Page not found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
