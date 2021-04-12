import React from "react";
import doctor from "../../../images/doctor.png";
import './appointment.css';

const Appoinntment = () => {
  return (
    <section className="appointment-container mt-4 mb-5">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid" src={doctor} alt="" />
        </div>
        <div className="col-md-7">
          <h5 className='mt-5' style={{color:'#1cc7c1'}}>APPOINTMENNT</h5>
          <h2 style={{color:'white'}} className="mt-4 mb-4">
            Make an appoinntment <br /> Today
          </h2>
          <p style={{fontSize:'12px'}} className="w-75 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos suscipit ipsa est quasi alias fugit facilis consequuntur nostrum aliquam? Nostrum
          </p>
          <br/>
          <button className='btn btn-primary mt-3'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Appoinntment;
