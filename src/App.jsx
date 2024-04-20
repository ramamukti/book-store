import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path={"/books/:id"} element={<BookDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
