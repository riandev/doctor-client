import React from 'react';
import Fluoride from '../../../images/s1.png';
import Cavity from '../../../images/s2.png';
import Teeth from '../../../images/s3.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData=[
    {
        image: Fluoride,
        name: 'Fluoride Treetment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptate neque possimus itaque accusantium adipisci necessitatibus!'
    },
    {
        image: Cavity,
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptate neque possimus itaque accusantium adipisci necessitatibus!'
    },
    {
        image: Teeth,
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptate neque possimus itaque accusantium adipisci necessitatibus!'
    }
]

const Services = () => {
    return (
        <section>
            <div className='text-center mt-3'>
                <h4 className='mb-4' style={{color:'#1cc7c1'}}>Our Services</h4>
                <h2 style={{color:'#3a4256'}} className='mb-3'>Services We Provide</h2>
            </div>
            <section>
                <div className='w-75 row m-auto'>
                    {serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)}
                </div>
            </section>
        </section>
    );
};

export default Services;