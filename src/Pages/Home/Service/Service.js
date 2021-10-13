import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,des,person} = service
    const history = useHistory()
    const detailsService = () => {
        history.push(`/booking/${id}`)
    }
    
    return (
        <div className="col-md-4 col-12">
            <div className="service">
                <div style={{height:'200px'}}>
                    <img style={{height:'100%',width:'100%'}} src={img} alt="" />
                </div>
                <div className="card_Body">
                    <h3>{name}</h3>
                    <p>number of person was : {person}</p>
                    <p>{des}</p>
                    <button onClick={detailsService} className="btn btn-warning mb-3">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;