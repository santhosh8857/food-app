import { Link } from "react-router-dom";

import "../css/Navbar.css";
import "../css/utilities.css";

const Navbar = (props) => {
  return (
    <div
      id="navbar"
      className="navbar"
      style={props.cart ? { position: "static" } : null}
    >
      <h1 className="logo">
        <span className="text-white">
          <i class="fa-solid fa-burger logo-color"></i> &nbsp;Happy Bites
        </span>
      </h1>

      <nav>
        <ul>
          <li>
            <Link className="route-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="route-link" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="route-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="route-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
