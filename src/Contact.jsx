import React, { useState } from "react";
import FormData from "./FormData";
import FormComponent from "./FormComponent";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const Formsubmit = (e) => {
      };
  return (
    <>
      <h2 className="text-center my-5 ">Get in Touch</h2>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto block_part">
            <form onSubmit={Formsubmit}>
              {FormData.map((val, ind) => {
                return (
                  <FormComponent
                    key={ind}
                    type={val.type}
                    label={val.label}
                    name={val.name}
                    placeholder={val.placeholder}
                    value={data.value}
                  />
                );
              })}

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={InputEvent}
                  value={data.msg}
                  name="msg"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
