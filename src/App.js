import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPage from "./components/user/Forgot";
import VerifyCode from "./components/user/VerifyCode";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/forgotpassword" element={<ForgetPage />} />
          <Route path="/verifycode" element={<VerifyCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
