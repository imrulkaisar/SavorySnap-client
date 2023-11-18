import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <span className="text-3xl font-primary font-bold uppercase leading-none whitespace-nowrap">
        Savory Snap
      </span>
      <p className="leading-none uppercase font-primary tracking-[4px]">
        Restaurant
      </p>
    </NavLink>
  );
};

export default Logo;
