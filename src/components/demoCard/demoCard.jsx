import './demoCard.css';
import '../card.tsx'

export const DemoCard = () => {
    return (
        <li style={{listStyle: "none"}}>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div className="headliner-container">
                            <span className="wave">👋</span>
                            <div className="headliner">
                                Josh is a multi-talented full stack developer, with a focus on deep learning, NLP, and Computer Vision. He
                                is currently pursuing a bachelors of computer science at RPI.
                            </div>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <h2>Rensselaer Polytechnic Institute</h2>
                        <p>
                            B.S. in Computer Science
                        </p>
                        <p>
                            Interfraternity Council President |
                            Phi Sigma Kappa President
                            | Society of Phyiscs Students President 
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default DemoCard;