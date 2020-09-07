import React from "react";


const FormComponent = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id="exampleFormControlInput1"
        onChange={InputEvent}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormComponent;
