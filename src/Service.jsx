import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <h2 className="my-5 text-center">Our Services</h2>
      <div className="conainer-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto block_part">
            <div className="row gy-5">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
