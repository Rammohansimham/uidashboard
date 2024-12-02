import ProfileDashboard from "../Components/ProfileDashboard";
import { ThemeContextProvider } from "../Components/ThemeContext";
import SideBar1 from "../Components/SideBar1";
import Topbar from "../Components/Topbar";

const SecondDashboard = () => {
    return (
      
        <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{width:"100%"}}><Topbar width=" 86%"/>  </div>
         
      
      <div style={{ display: "flex" }}>
        <SideBar1 />
        <ProfileDashboard />
      </div>
    </div>
    
    );
  };
  
  export default SecondDashboard;