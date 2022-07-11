import "./widget.scss"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HotelIcon from '@mui/icons-material/Hotel';
const Widget = ({type}) => {
  let data;
switch (type) {
  case "users":
    data={
      title:"USERS",
      counter:8987,
      link:"See all users",
      icon:<PersonIcon  className="icon"
      style={{
        color: "rgb(190, 7, 7)",
        backgroundColor:" rgb(254, 180, 180)"
      }}/>

    }
    break;
    case "bookings":
      data={
        title:"BOOKINGS",
        counter:2323,
        link:"View all bookings",
        icon:<ShoppingCartIcon  className="icon" style={{
          backgroundColor:"rgb(243, 220, 152)",
          color:" rgb(220, 187, 23)"
        }}/>
  
      }
      break;
      case "hotels":
      data={
        title:"HOTELS",
        counter:7676,
        link:"See all hotels",
        icon:<HotelIcon  className="icon"
        style={{
          backgroundColor:" rgb(162, 237, 113)",
          color:" rgb(113, 167, 38)"
        }}/>
  
      }
      break;

  default:
    break;
}
  return (
    <div className="widget">
 <div className="left">
  <span className="title">{data.title}</span>
  <span className="counter">{data.counter}</span>
 <span className="link">{data.link}</span> 
 </div>
 <div className="right">
 {data.icon}
 </div>
    </div>
  )
}

export default Widget
