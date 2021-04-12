import React from "react";
import Card from "react-bootstrap/Card";
import './DoctorCard.css';

const DoctorCard = (props) => {
  const { photo, name, phone } = props.doctor;
  return (
    <div className="col-md-4 text-center">
      <Card className='doctor-container' style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <h5>{name}</h5>
          <p className='text-secondary'> <small>{phone}</small></p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DoctorCard;
