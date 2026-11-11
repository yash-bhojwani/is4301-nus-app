const AUTH_ERROR_MESSAGES = {
    "auth/user-not-found":
        "No account exists with this email address. Please check the email, or sign up to create a new account.",
    "auth/wrong-password":
        "Incorrect password for this account. Please try again.",
    "auth/invalid-credential":
        "The email or password is incorrect. Please check your details and try again.",
    "auth/invalid-email":
        "Please enter a valid email address (for example, name@example.com).",
    "auth/missing-password": "Please enter your password.",
    "auth/email-already-in-use":
        "An account with this email already exists. Please log in instead.",
    "auth/weak-password":
        "This password is too weak. It must be at least 6 characters long.",
    "auth/too-many-requests":
        "Too many unsuccessful attempts. Please wait a few minutes and try again.",
    "auth/user-disabled":
        "This account has been disabled. Please contact the administrator.",
    "auth/popup-closed-by-user":
        "The Google sign-in window was closed before sign-in was completed.",
    "auth/cancelled-popup-request":
        "Another sign-in window is already open. Please complete or close it first.",
    "auth/popup-blocked":
        "Your browser blocked the Google sign-in pop-up. Please allow pop-ups for this site and try again.",
    "auth/account-exists-with-different-credential":
        "An account already exists with this email using a different sign-in method.",
    "auth/network-request-failed":
        "Network error. Please check your internet connection and try again.",
};

export function getAuthErrorMessage(error) {
    return (
        AUTH_ERROR_MESSAGES[error.code] ||
        `Something went wrong (${error.code}). Please try again.`
    );
}
