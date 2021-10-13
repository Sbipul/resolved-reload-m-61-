import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [servises,setServices] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <Container id="services">
            <div className="row mt-5">
            <h1>Cards all</h1>
            {
                servises.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
        </Container>
    );
};

export default Services;