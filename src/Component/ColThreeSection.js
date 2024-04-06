import React from "react";

export const ColThreeSection = (props) => {
  const Data = props.Data;

  return (
    <section className="ColThreeSection container-fluid  ">
      <section className={props.BgStyle}>
        <div class="air air2"></div>
        <h5 className="text-center">{props.H5}</h5>
        <h2 className="card-title">
          {props.H2}
          <span>{props.SPAN}</span>
        </h2>

        <div className="row  row-cols-1  ">
          {Data.map((Data, index) => {
            return (
              <div className={props.COLSIZE} key={index}>
                <div>
                  <div
                    className="card h-100 mb-3  {props.BgStyle} "
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <img
                      src={Data.Image}
                      className="img-fluid rounded-start"
                      alt={Data.ImageALt}
                    />

                    <div className="card-body ">
                      <h3 className="card-text">{Data.Text}</h3>
                      <h4 className="card-title">{Data.Text2}</h4>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
