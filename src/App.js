import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <NavBar />
          <main className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/academics"
                element={
                  <ProtectedRoute pageName="Academics">
                    <Academics />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admission"
                element={
                  <ProtectedRoute pageName="Admission">
                    <Admission />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
