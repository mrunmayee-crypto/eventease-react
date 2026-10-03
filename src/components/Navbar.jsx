import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  function handleLogout() {
    logoutUser();          // clears the login state
    navigate("/login");
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Event<span>Ease</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={linkClass}>Home</NavLink>
            </li>

            {/* Different links depending on login state (conditional rendering) */}
            {user ? (
              <>
                <li>
                  <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                </li>
                <li className="nav-user">Hi, {user.name.split(" ")[0]}</li>
                <li>
                  <button className="nav-btn nav-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className={linkClass}>Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register" className="nav-btn">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
