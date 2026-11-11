import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { getAuthErrorMessage } from "../authErrors";
import Notification from "../components/Notification";

function Login() {
    const { user } = useAuth();
    const location = useLocation();
    const from = location.state?.from || "/";

    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [notification, setNotification] = useState(
        location.state?.message
            ? { type: "info", message: location.state.message }
            : null
    );

    // Once logged in, go back to the page the user originally wanted
    if (user) {
        return <Navigate to={from} replace />;
    }

    const isSignUp = mode === "signup";

    const handleSubmit = async (event) => {
        event.preventDefault();
        setNotification(null);
        setSubmitting(true);
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (error) {
            setNotification({ type: "error", message: getAuthErrorMessage(error) });
        } finally {
            setSubmitting(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setNotification(null);
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            setNotification({ type: "error", message: getAuthErrorMessage(error) });
        }
    };

    const switchMode = () => {
        setMode(isSignUp ? "login" : "signup");
        setNotification(null);
    };

    return (
        <section className="page auth-page">
            <h1>{isSignUp ? "Sign Up" : "Log In"}</h1>

            <Notification
                type={notification?.type}
                message={notification?.message}
                onClose={() => setNotification(null)}
            />

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    autoComplete="email"
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isSignUp ? "At least 6 characters" : "Your password"}
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                />

                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Please wait..." : isSignUp ? "Sign Up" : "Log In"}
                </button>
            </form>

            <div className="auth-divider">or</div>

            <button type="button" className="btn btn-google" onClick={handleGoogleSignIn}>
                Continue with Google
            </button>

            <p className="auth-switch">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button type="button" className="link-button" onClick={switchMode}>
                    {isSignUp ? "Log in" : "Sign up"}
                </button>
            </p>
        </section>
    );
}

export default Login;
