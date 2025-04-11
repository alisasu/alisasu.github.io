import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">projects</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </nav>
  );
};

export default NavBar;