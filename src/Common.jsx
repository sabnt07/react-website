import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="conainer-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto block_part mt-5">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column pl-5 home-part">
                    <h1>{props.name}<br/><strong className="brand_name"> {props.brandname}</strong></h1>
                    <h2 className="mt-3 brand_quote pt-1">{props.text}</h2>
                    <div className="mt-3 mb-4">
                        <NavLink to={props.visit} className="btn btn-get-started">{props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img mt-5 mb-5">
                    <img src ={props.imgsrc} className="img-fluid animated" alt="Common-img"/>

                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
