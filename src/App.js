import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewPage from "./pages/newPage/NewPage";
import Trekking from "./pages/newTrekking/Trekking";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NewHotel from "./pages/newHotel/NewHotel";
import Adventure from "./pages/adventure/Adventure";

function App() {
  document.title = "Admin";

  return (
    <div className="App">
  

<BrowserRouter>
    <Routes>
     <Route path="/" >
      <Route index element={<Home/>}></Route>
     <Route path="login" element={<Login/>}></Route>
     <Route path="user">
      <Route index element={<List/>}/> 
      <Route path=":userId" element={<Single/>}/>
      <Route path="new" element={<NewPage/>}/>
     </Route>
     <Route path="/hotel" >
<Route index element={<List/>}/>
<Route path=":hotelId" element={<Single/>}/>
<Route path="new" element={<NewHotel/>}/>
     </Route>
     <Route path="/trekking" >
<Route index element={<List/>}/>
<Route path=":trekkingId" element={<Single/>}/>
<Route path="new" element={<Trekking/>}/>
     </Route>
     <Route path="/adventure" >
<Route index element={<List/>}/>
<Route path=":adventureId" element={<Single/>}/>
<Route path="new" element={<Adventure/>}/>
     </Route>
     <Route path="/holiday" >
<Route index element={<List/>}/>
<Route path=":holidayId" element={<Single/>}/>
<Route path="new" element={<NewPage/>}/>
     </Route>
     <Route path="/booking" >
<Route index element={<List/>}/>
<Route path=":bookingId" element={<Single/>}/>
<Route path="new" element={<NewPage/>}/>
     </Route>
     </Route>
     <Route path="/enquiry" >
<Route index element={<List/>}/>

     </Route>
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
