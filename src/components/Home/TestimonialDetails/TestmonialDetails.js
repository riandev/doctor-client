import React from "react";
import Card from "react-bootstrap/Card";
import './testimonidaldetails.css'

const TestmonialDetails = ({ testimonial }) => {
  return (
    <div className="col-md-4">
      <Card className='testimonial-card' style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Text className="text-secondary">
            {testimonial.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <div className='d-flex align-items-center'>
            <div className=''>
              <img className="img-fluid w-50" src={testimonial.photo} alt="" />
            </div>
            <div className=''>
              <h5 style={{color:'#1cc7c1'}}>{testimonial.name}</h5>
              <p className="text-secondary">
                {" "}
                <small>{testimonial.location}</small>{" "}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestmonialDetails;
