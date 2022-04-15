import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Home/Service/Service';
import './Serviecs.css'
const Serviecs = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('serviecs.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services'>
            <h1 className='services-title'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Serviecs;