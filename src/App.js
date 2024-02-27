
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/users/Register';
import SignUp from './components/SignUp';
import Practical from './components/users/Practical';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
   
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/practical" element={<Practical />} />
   
   
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
