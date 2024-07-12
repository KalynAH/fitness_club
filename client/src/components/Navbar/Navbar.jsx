import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-md-4">
      <div className="container-fluid">
        <Link className="navbar-brand virtual-link" to={"/"}>
          Virtual Fitness Club
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-5">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to={"/"}>
                <i className="fa-solid fa-house icons"></i>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-solid fa-user icons"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/routines"}>
                <i className="fa-solid fa-person-running icons"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
