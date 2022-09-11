import Singin from "./pages/Signin/Singin";
import Signup from "./pages/Signup/Signup";
import { Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="container flex items-center justify-center my-10">
      <Routes>
        <Route path="/login" element={<Singin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
}

export default App;
