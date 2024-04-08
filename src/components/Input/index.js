import "./Input.css";

const Input = (props) => {
  const formPlaceholder = `${props.placeholder}...`;

  const onType = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="input">
      <label>{props.label}</label>
      <input
        value={props.val}
        onChange={onType}
        required={props.req}
        placeholder={formPlaceholder}
      />
    </div>
  );
};

export default Input;
