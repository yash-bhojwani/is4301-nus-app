import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ pageName, children }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return <p className="page">Checking your login status...</p>;
    }

    if (!user) {
        return (
            <div
                className="modal-overlay"
                role="dialog"
                aria-modal="true"
                aria-labelledby="login-required-title"
            >
                <div className="modal">
                    <h2 id="login-required-title">Login required</h2>
                    <p>
                        You must be logged in to view the <strong>{pageName}</strong> page.
                    </p>
                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                                navigate("/login", { state: { from: location.pathname } })
                            }
                        >
                            Log in to continue
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/")}
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return children;
}

export default ProtectedRoute;
