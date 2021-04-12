import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorCard from '../DoctorCard/DoctorCard';

const doctorData=[
    {
        photo:doctor,
        name:'Dr. Dilruba',
        phone:'+880178373636'
    },
    {
        photo:doctor,
        name:'Dr. Sumya',
        phone:'+880176363535'
    },
    {
        photo:doctor,
        name:'Dr. Muntasir',
        phone:'+880177363636'
    }
]

const Doctor = () => {
    return (
        <section>
            <div className='mt-5 pt-5 text-center'>
                <h5 style={{color:'#1cc7c1'}}>Our Doctors</h5>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        doctorData.map(doctor => <DoctorCard doctor={doctor}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;