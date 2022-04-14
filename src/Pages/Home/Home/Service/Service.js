import React from 'react';

const Service = (props) => {
    const { name, id, img } = props.service;
    return (
        <div>
            <img src={img} alt="" />            <h3>{name}</h3>
            {
                // Services.map(service)
            }
        </div>
    );
};

export default Service;