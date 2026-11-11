function Notification({ type, message, onClose }) {
    if (!message) return null;

    return (
        <div className={`notification notification-${type}`} role="alert">
            <span>{message}</span>
            <button
                type="button"
                className="notification-close"
                onClick={onClose}
                aria-label="Dismiss notification"
            >
                ×
            </button>
        </div>
    );
}

export default Notification;
