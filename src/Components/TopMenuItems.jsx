import { NavLink } from "react-router-dom";

const TopMenuItems = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact-us">Contact</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/our-menu">Our Menu</NavLink>
      <NavLink to="/foods">Foods</NavLink>
    </>
  );
};

export default TopMenuItems;
