import "./App.css";
import ReviewList from "./components/ReviewList";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
