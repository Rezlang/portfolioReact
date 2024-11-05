import React, { useState } from 'react';
import './flipCard.css';
import '../card';

export const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        if (window.innerWidth <= 768) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <li style={{ listStyle: "none" }}>
            <div className="flip-card" onClick={handleCardClick}>
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                        <div className="headliner-container">
                            <div className="upper">
                                <span className="wave">👋</span>
                                <div className="headliner">
                                    Josh is a multi-talented full stack developer, with a focus on Distributed Systems, and Financial Technologies. He
                                    is currently pursuing a bachelors of Computer Science with a minor in Economics at RPI.
                                </div>
                            </div>
                            <div className="interaction-text">
                                <span className="desktop-text">&lt; hover me &gt;</span>
                                <span className="mobile-text">&lt; tap me &gt;</span>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <h2>Rensselaer Polytechnic Institute</h2>
                        <p>B.S. in Computer Science</p>
                        <p>
                            Interfraternity Council President |
                            Phi Sigma Kappa President |
                            Society of Physics Students President 
                        </p>
                        <div className="interaction-text">
                                <span className="desktop-text">&lt; hover me &gt;</span>
                                <span className="mobile-text">&lt; tap me &gt;</span>
                            </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default FlipCard;
