import React from "react";
import Form from 'react-bootstrap/Form';
import './contactus.css'

const ContactUs = () => {
  return (
    <section className="contactus-container">
      <div className="text-center mt-5">
        <h5 style={{color: '#1cc7c1'}} className="pt-5">CONTACT US</h5>
        <h3 className="text-white mb-5">Always Connect With us</h3>
      </div>
      <div className="container">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email Address*" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Subject*" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Your Message*"/>
          </Form.Group>
          <div className="text-center mt-4">
          <button className='btn btn-primary'>Submit</button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactUs;
