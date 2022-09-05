import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import EquipmentListing from "../pages/EquipmentListing";
import EquipmentDetails from "../pages/EquipmentDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from '../pages/Login';
import Register from '../pages/Register';
import BecomeDriver from '../pages/BecomeDriver'
import OnRent from '../pages/onRent';
import Inputs from '../sourceInput';
import getData from '../Hooks/fetchData';
import  inputs from '../BecomeDriverInput'
import Checkout from "../pages/Checkout";
const Routers = () => {
   const {data}=getData();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/equipments" element={<EquipmentListing />} />
      <Route path="/equipments/:idd" element={<EquipmentDetails data={data} />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:idd" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/onrent" element={<OnRent inputs={Inputs}/>} />
      <Route path="/become-driver" element={<BecomeDriver inputs={inputs}/>} />
      <Route path="/checkout/:idd" element={<Checkout data={data}/>} />

      <Route path="*" element={<NotFound />} />
  

    </Routes>
  );
};

export default Routers;
