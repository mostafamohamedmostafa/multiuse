import React from "react";
export const HeroComponent = (props) => {
  return (
    <section className="Hero-Section container- ">
      <section className="bgbg">
        <section className="Hero-Section-Inner">
          <div className="row  row-cols-1   ">
            <div className="col-lg-6 " data-aos="zoom-in-up"  data-aos-duration="2000">
              <div className="card h-100 Hero-Left-Card ">
                <div className="card-body">
                  <h4>{props.H4}</h4>
                  <h2>
                    {props.H2} <span>{props.H2Span}</span>
                  </h2>
                  <p>{props.P}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 " data-aos="zoom-in-up"  data-aos-duration="2000">
              <div className="card h-100 ">
                <div className="card-body">
                  <img
                    className="img-fluid heartbeat"
                    src={props.IMG}
                    alt={props.IMGALT}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
      </section>
    </section>
  );
};
