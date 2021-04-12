import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <img src={service.image} className="img-fluid h-25 mb-3" alt="" />
            <h5 className="mb-4">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetails;