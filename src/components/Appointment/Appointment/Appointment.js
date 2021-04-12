import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingDetails from '../BookingDetails/BookingDetails';


const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <div>
        <Navigation></Navigation>
        <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
        <BookingDetails date={selectedDate}></BookingDetails>
        <Footer></Footer>
        </div>
    );
};

export default Appointment;