import React from 'react'
import { Container } from 'react-bootstrap'

const Map = () => {
    return (
        
            <div className='container-fluid p-0 m-0' >


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3947996090287!2d75.83845782604756!3d22.713562729391505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdbb26412e27%3A0x427ee908958eb43d!2sGangwal%20Bus%20Stand%2C%20Vaishnav%20Stadium%2C%20Indore%2C%20Madhya%20Pradesh%20452002!5e0!3m2!1sen!2sin!4v1738840356646!5m2!1sen!2sin"
                    width="100%"
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
      
    )
}

export default Map