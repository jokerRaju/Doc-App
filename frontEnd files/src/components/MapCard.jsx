import React from "react";

import './MapCard.css';

export default function MapCard(){
    return (
        <section className="mapCard">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.323481888635!2d78.74042707412424!3d13.20499620972018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad7eab9a21060d%3A0x7b3a37320691ce2b!2sSree%20Sainath%20Homeo%20Clinic!5e0!3m2!1sen!2sin!4v1708865691569!5m2!1sen!2sin" 
                // width="600" 
                // height="450" 
                // style="border:0;"
                className="map"
                title="Sri Sai Nath Homeo Clinic"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <p>
                Discover the healing oasis that awaits you! 
                Click the button below to explore our welcoming hospital location on the map. 
                For those who prefer the warmth of in-person care, our doors are open, 
                ready to provide expert medical treatment with a personal touch. 
                Your journey to well-being starts with a visit—find us on the map now!
            </p>
        </section>
    );
}