
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Sidebar1 from './Components/SideBar1';
import Topbar from "./Components/Topbar";
import Dashboard from "./pages/Dashboard";
import RightNavBar from './Components/RightNavBar';
import SecondDashboard from './pages/SecondDashBoard';
import { ThemeContextProvider } from "./Components/ThemeContext"


function App() {
  return (
    // <div className="App">
    //  <Header/>
    // </div>
    <ThemeContextProvider>
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* <Topbar /> */}
         
          <Routes>
           
            <Route path="" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/default" element={<SecondDashboard/>} />
          </Routes>
        </div>
      </div>
      
    </Router>
    </ThemeContextProvider>
  );
}

export default App;
