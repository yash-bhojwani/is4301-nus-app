import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

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
                {user ? (
                    <>
                        <li className="navbar-user">{user.email}</li>
                        <li>
                            <button type="button" className="navbar-logout" onClick={handleLogout}>
                                Log Out
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
