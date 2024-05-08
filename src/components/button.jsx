const Button = ({ children, handler, disabled = false, className }) => {
  return (
    <button
      onClick={handler}
      disabled={disabled}
      className={`button ${className} ${disabled && "disabled"}`}
    >
      {children}
    </button>
  );
};

export default Button;
