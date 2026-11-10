import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <span className="navbar-brand">NUS</span>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/academics">Academics</NavLink>
                </li>
                <li>
                    <NavLink to="/admission">Admission</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;