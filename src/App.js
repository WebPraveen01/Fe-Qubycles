
import './App.css';
import Login from './components/user/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetPassword from './components/user/SetPassword';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/set-password" element={<SetPassword/>} />
      
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
