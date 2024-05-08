const Input = ({ type, value, handler, checked = false, classname }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={handler}
      checked={checked}
      className={classname}
    />
  );
};

export default Input;
