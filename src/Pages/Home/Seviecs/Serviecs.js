import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Serviecs = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('serviecs.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2>Serviecs {services.length}</h2>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Serviecs;