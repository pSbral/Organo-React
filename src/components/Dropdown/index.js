import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        value={props.value}
        required={props.required}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value={""}></option>
        {props.itemList.map((i) => (
          <option key={i.name}>{i.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
