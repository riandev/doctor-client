import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingDetails = ({date}) => {
    const appointmentData=[
        {
            id:1,
            subject:'Teeth Orthodontics',
            timeRange:'8.00 AM - 9.00 PM',
            space:10
        },
        {
            id:2,
            subject:'Cosmetic Dentistry',
            timeRange:'8.00 AM - 9.00 PM',
            space:10
        },
        {
            id:3,
            subject:'Teeth Cleaning',
            timeRange:'8.30 AM - 9.00 PM',
            space:10
        },
        {
            id:4,
            subject:'Cavity Protection',
            timeRange:'9.00 AM - 11.30 AM',
            space:10
        },
        {
            id:5,
            subject:'Layer Checkup',
            timeRange:'8.00 AM - 11.00 AM',
            space:10
        },
        {
            id:6,
            subject:'Jurm Checkup',
            timeRange:'10.00 AM - 12.00 PM',
            space:10
        }
    ]
    return (
        <div>
            <h2 style={{color:'#1cc7c1'}} className="text-center mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="container">
                <div className="row">
                    {appointmentData.map(booking => <BookingCard booking={booking} date={date}></BookingCard>)}
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;