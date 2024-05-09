const Input = ({ type, value, handler, checked = false, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={handler}
      checked={checked}
      className={className}
    />
  );
};

export default Input;
