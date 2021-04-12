import React from "react";
import exceptions from "../../../images/exceptional.png";
import "./exceptional.css";

const Exceptional = () => {
  return (
    <section className="container d-flex justify-content-center exceptional-container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img
            className="img-fluid image-exceptional"
            src={exceptions}
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h2 style={{color: '#3a4256'}}>
            Exceptional Dental <br /> Care, on Your Terms
          </h2>
          <p className="text-secondary w-75 mt-5 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            harum natus quia maxime quam suscipit, debitis velit ab, rem
            reprehenderit perferendis fugit incidunt illum corporis vel
            exercitationem. At similique dolorem fuga, veritatis soluta dicta
            aperiam, nemo vero, dolores debitis labore dolor nulla maiores nisi
            exercitationem!
          </p>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
