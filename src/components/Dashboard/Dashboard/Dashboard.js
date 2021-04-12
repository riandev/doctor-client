import React from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
            
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5">
                <h1>Calender</h1>
            </div>
            <div className="col-md-5">
                <AppointmentByDate></AppointmentByDate>
            </div>
                
            </div>
        </section>
    );
};

export default Dashboard;