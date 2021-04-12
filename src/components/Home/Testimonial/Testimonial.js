import React from "react";
import "./testimonial.css";
import ellipse1 from "../../../images/Ellipse 1.png";
import ellipse2 from "../../../images/Ellipse 2.png";
import ellipse3 from "../../../images/Ellipse 3.png";
import TestmonialDetails from "../TestimonialDetails/TestmonialDetails";

const testimonialData = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde assumenda voluptates inventore. Sint alias vitae fugiat nulla saepe assumenda enim quis porro tempore aliquam.",
    photo: ellipse1,
    name: "Winson Herry",
    location: "California",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde assumenda voluptates inventore. Sint alias vitae fugiat nulla saepe assumenda enim quis porro tempore aliquam.",
    photo: ellipse2,
    name: "Libson Herry",
    location: "Dhaka",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde assumenda voluptates inventore. Sint alias vitae fugiat nulla saepe assumenda enim quis porro tempore aliquam.",
    photo: ellipse3,
    name: "Binson Herry",
    location: "India",
  },
];

const Testimonial = () => {
  return (
    <section>
      <div className="testimonial-top container">
        <h5 className="mb-3" style={{ color: "#1cc7c1", fontSize: "21px" }}>
          TESIMONIAL
        </h5>
        <h3 style={{ fontSize: "32px",color:'#3a4256' }}>
          What's Our Patients <br /> Says
        </h3>
      </div>
      <div className='container mt-5 mb-5'>
        <div className="row">
          {testimonialData.map((testimonial) => (
            <TestmonialDetails testimonial={testimonial}></TestmonialDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
