import './navbar.scss'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="wrapper">
      <div className="items">
   <div className="item">
    <LanguageOutlinedIcon/>
    English
   </div>
   <div className="item container-fluid">
   
    <img className='w-100 rounded' src="logo.jpeg" alt="" />
    

   </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar
