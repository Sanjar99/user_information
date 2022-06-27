import "./Header.css";
import { NavLink, Link } from "react-router-dom";

// SVG components
import {
  Home,
  Talim,
  Shtraf,
  Book,
  Portal,
  Work,
  Komunal,
  Family,
} from "../SVG/SVG";

const Header = () => {
  return (
    <div className="header">
      <Link className="header-logo" to="/login">
        <img src="https://picsum.photos/50/50" alt="logo" />
      </Link>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person"
        exact
      >
        <Home />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/daftar"
      >
        <Book />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/ish"
      >
        <Work />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/shtraf"
      >
        <Shtraf />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/talim"
      >
        <Talim />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/komunal"
      >
        <Komunal />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/portal"
      >
        <Portal />
      </NavLink>
      <NavLink
        className="header-link"
        activeClassName="header-link-active"
        to="/person/family"
      >
        <Family />
      </NavLink>
    </div>
  );
};

export default Header;
