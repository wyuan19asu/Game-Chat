import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRightFromBracket,
  faVideo,
  faUserPlus,
  faEllipsis,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faFile, faFileImage } from "@fortawesome/free-regular-svg-icons";
library.add(
  faRightFromBracket,
  faVideo,
  faUserPlus,
  faEllipsis,
  faFile,
  faFileImage,
  faPaperPlane
);
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
