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
                                Josh is a multitalented developer focused on AI Engineering and Functional Programming. He enjoys solving tough problems and is currently employed by KPMG.
                            </div>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <h2>Rensselaer Polytechnic Institute</h2>
                        <p>
                            B.S. in Computer Science
                        </p>
                        <p>
                            Functional Programming |
                            AI |
                            Computer Vision |
                            Distributed Systems
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default DemoCard;