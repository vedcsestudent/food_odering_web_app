import {Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import FoodDetails from "./components/foodDetails/FoodDetails";
import FoodCatalog from "./components/foodCatalog/FoodCatalog";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup";
import Create from "./components/create/Create";
import  {useLocation} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location=useLocation();
  useEffect(()=>
  {
    window.scrollTo(0,0);
  },[location.pathname])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/create" element={<Create></Create>}/>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/food/:id" element={<FoodDetails/>}></Route>
        <Route path="/foods/:id" element={<FoodCatalog/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
       

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
