import React from 'react';
import './Contact.css';


const Contact = () =>{
    return(
        <div className="contact" >
        <div className="subTitle">
            <i className="fas fa-map-marker-alt"></i> 
            My city:
            <a href="https://goo.gl/maps/27cDydCFh38FUNeb6" target="_blank">
                Los Angeles
            </a>
        </div>

        <div  className="subTitle"><i className="fas fa-phone"></i> 8 800505-04-83</div>
        </div>
    );
}


export default Contact;