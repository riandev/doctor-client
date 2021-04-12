import React from 'react';
import Appoinntment from '../Appointment/Appoinntment';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Doctor from '../Doctors/Doctor';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appoinntment></Appoinntment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;