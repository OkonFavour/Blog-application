import './App.css';
import TopBar from './components/topbar/topbar';
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = true;

  return (
    <div className="app-container">
      <TopBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId"  element={<Single />}/>
      </Routes>
    </div>

  )
}

export default App
