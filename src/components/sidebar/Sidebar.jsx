import "./sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BadgeIcon from '@mui/icons-material/Badge';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  return (
    
    <div className="sidebar">
      <div className="top px-2 pt-2 ">
        <div className="logo" >
     <img className="rounded w-100" src="logo.jpeg" alt="" />
        </div>
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <HomeIcon className="icon"/>  
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <BedroomParentIcon className="icon"/>
            <span>Hotels</span>
          </li>
          <li>
            <CardMembershipIcon className="icon"/>
            <span>Bookings</span>
          </li>
          <li>
            <HikingIcon className="icon"/>
            <span>Trekking</span>
          </li>
          <li>
            <LandscapeIcon className="icon"/>
            <span>Adventure</span>
          </li>
          <li>
            <HolidayVillageIcon className="icon"/>
            <span>Holiday Package</span>
          </li>
          <li>
            <BadgeIcon className="icon"/>
            <span>users</span>
          </li>
          <li>
            <SupportAgentIcon className="icon"/>
            <span>enquiry</span>
          </li>
          <p className="title">ADMIN</p>
          <li>
            <PersonIcon className="icon"/>
            <span>profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
