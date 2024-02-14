import "./Button.css";

const Button = ({
    children,
    type = "button",
    className = "btn",
    onClick = () => {},
    disabled = false,
}) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;