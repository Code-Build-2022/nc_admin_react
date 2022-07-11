import "./sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import HikingIcon from "@mui/icons-material/Hiking";
import LandscapeIcon from "@mui/icons-material/Landscape";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BadgeIcon from "@mui/icons-material/Badge";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location=useLocation()
  const path=location.pathname
  let splitPath=path.split('/')[1]


  return (
    <div className="sidebar">
      <div className="top px-2 pt-2 ">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Namma Chikmagaluru</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className={"/"===path? "active" : ""}>
              <HomeIcon className="icon" />
              <span >Dashboard</span>
            </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/booking" style={{ textDecoration: "none" }}>
            <li className={("/booking"===path || "booking"===splitPath)? "active" : ""}>
              <CardMembershipIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
          <Link to="/hotel" style={{ textDecoration: "none" }}>
            <li className={("/hotel"===path || "hotel"===splitPath)? "active" : ""}>
              <BedroomParentIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/trekking" style={{ textDecoration: "none" }}>
            <li className={("/trekking"===path || "trekking"===splitPath)? "active" : ""}>
              <HikingIcon className="icon" />
              <span>Trekking</span>
            </li>
          </Link>
          <Link to="/adventure" style={{ textDecoration: "none" }}>
            <li className={("/adventure"===path ||  "adventure"===splitPath)? "active" : ""}>
              <LandscapeIcon className="icon" />
              <span>Adventure</span>
            </li>
          </Link>
          <Link to="/holiday" style={{ textDecoration: "none" }}>
            <li className={("/holiday"===path || "holiday"===splitPath)? "active" : ""}>
              <HolidayVillageIcon className="icon" />
              <span>Holiday Package</span>
            </li>
          </Link>
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li className={("/user"===path || "user"===splitPath)? "active" : ""}>
              <BadgeIcon className="icon" />
              <span>users</span>
            </li>
          </Link>
          <Link to="/enquiry" style={{ textDecoration: "none" }}>
            <li className={"/enquiry"===path? "active" : ""}>
              <SupportAgentIcon className="icon" />
              <span>enquiry</span>
            </li>
          </Link>

          <p className="title">ADMIN</p>
          <li>
            <PersonIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
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
