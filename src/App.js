import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewPage from "./pages/newPage/NewPage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  document.title = "Namma Chikmagalauru";
  return (
    <div className="App">
  

<BrowserRouter>
    <Routes>
     <Route path="/" >
      <Route index element={<Home/>}></Route>
     <Route path="login" element={<Login/>}></Route>
     <Route path="users">
      <Route index element={<List/>}/>
      <Route path=":userId" element={<Single/>}/>
      <Route path="new" element={<NewPage/>}/>
     </Route>
     </Route>

    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
