import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
    const [showHours, setShowHours] = useState(false)

    return (
        <div>
            <div className='banner' />
            <div className="homeButton">
                <Link to="/menu/pastries">
                    <img src="./Icons/mug-hot-solid.svg" alt="Menu" className="social-icon" />
                    View Our Menu | Ver El Menú
                </Link>
            </div>
            <div>
                <a href="https://www.instagram.com/dolciparadisebakery" className="button" target="_blank" rel="noopener noreferrer">
                    <img src="./Icons/instagram.svg" alt="Instagram" className="social-icon" />
                    Follow Our Instagram! | Síguenos En Instagram!
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100057453519721" className="button" target="_blank" rel="noopener noreferrer">
                    <img src="./Icons/facebook.svg" alt="Facebook" className="social-icon" />
                    Follow Our Facebook! | Síguenos En Facebook!
                </a>
            </div>
            <button className="button" onClick={() => setShowHours(!showHours)} aria-expanded={showHours}>
                <img src="./Icons/clock-solid.svg" alt="Clock" className="social-icon" />
                Hours | Horario
            </button>
            {showHours &&
                (
                    <>
                        <div className='overlay'></div>
                        <div className='hours-box'>
                            <button className="close-button" onClick={() => setShowHours(false)}>
                                <img src="./Icons/xmark-solid.svg" alt="Close" className="close-icon" />
                            </button>
                            <p> Hours | Horario </p>
                            <p><u> Monday: 7:00 AM - 6:30 PM </u></p>
                            <p><u> Tuesday: 7:00 AM - 5:30 PM </u></p>
                            <p><u> Wednesday: 7:00 AM - 6:30 PM </u></p>
                            <p><u> Thursday: 7:00 AM - 6:30 PM </u></p>
                            <p><u> Friday: 7:00 AM - 6:30 PM </u></p>
                            <p><u> Saturday: 7:00 AM - 6:00 PM </u></p>
                            <p><u> Sunday: 7:00 AM - 4:00 PM </u></p>
                        </div>
                    </>
                )}
            <div>
                <a href="https://g.co/kgs/sBoF2gs" className="button" target="_blank" rel="noopener noreferrer">
                    <img src="./Icons/google.svg" alt="Google" className="social-icon" />
                    Review Us! | Evalúanos!
                </a>
            </div>
            <div>
                <a href="https://maps.app.goo.gl/MAL5fZhR9qpzBScu5" className="button" target="_blank" rel="noopener noreferrer">
                    <img src="./Icons/location-dot-solid.svg" alt="Maps" className="social-icon" />
                    Find Us On Google Maps! | Encuéntranos en Google Maps!
                </a>
            </div>
            <div className='map-container'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6046.112109365776!2d-73.92295972369712!3d40.738792071389604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ed8a62ef259%3A0xad7108a7d8706383!2sDolci%20Paradise%20Bakery%20I!5e0!3m2!1sen!2sus!4v1715308112640!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default Home;