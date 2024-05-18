import Card from '../card.tsx';
import './demoCard.css';
import '../card.tsx'

export const DemoCard = () => {
    return (
        <li style={{listStyle: "none"}}>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <Card
                            href="/detect"
                            title="Computer Vision and Neural Network Demos"
                            body="Assorted open source demos to play around with."
                            skills={[
                            {
                                name: 'Pytorch',
                                icon: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg',
                            },
                            {
                                name: 'Numpy',
                                icon: 'https://raw.githubusercontent.com/numpy/numpy/64676baf423c3e1c53b37ae413c3ca6aaecc642a/branding/logo/logomark/numpylogoicon.svg',
                            },
                            {
                                name: 'OpenCV',
                                icon: 'https://github.com/opencv/opencv/wiki/logo/OpenCV_logo_no_text.png',
                            },
                            ]}
                            imgPath="../../computerVision.png"
                        />
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default DemoCard;