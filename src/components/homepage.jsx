import React from 'react';
import Card from './card.tsx';
import Jobs from './jobs/jobs.jsx';
import Layout from './layouts/Layout';
import BouncingWords from './bouncingWords/bouncingWords.jsx';
import FlipCard from './flipCard/flipCard.jsx';

const Home = () => {
  return (
    <Layout title="Welcome">
      <title>Test</title>
      <main>
        <div id="bounce">
          <BouncingWords />
        </div>
        <FlipCard/>
        <ul className="link-card-grid" id="projects-grid">
          <Card
            href=""
            title="Portfolio Website"
            body="This beautiful personal project website!"
            skills={[
              {
                name: 'Astro',
                icon: 'https://astro.build/assets/press/astro-icon-light-gradient.svg',
              },
              {
                name: 'React',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
              },
            ]}
            imgPath={`${process.env.PUBLIC_URL}/computerVision.png`}
          />
          <Card
            href="https://github.com/AI-and-Blockchain/S24_Proof_of_Vision_Tokens" target="_blank"
            title="Proof of Vision Token"
            body="A dividend paying- Ethereum based- token that can be mined by classifying images"
            skills={[
              {
                name: 'Ethereum',
                icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029',
              },
              {
                name: 'Solidity',
                icon: 'https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg',
              },
              {
                name: 'FastAPI',
                icon: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg',
              },
              {
                name: 'Chainlink',
                icon: 'https://images.ctfassets.net/t3wqy70tc3bv/57PKzLtfnCqvrvVO9dQy4u/ad6c9e026b77cf59643680bd931ca5c1/Chainlink-logo.png',
              },
            ]}
            imgPath={`${process.env.PUBLIC_URL}/blockchain.png`}
          />
          <Card
            href="https://github.com/kaanlus/LightWeight" target="_blank"
            title="Lightweight"
            body="A personal weightlifting application"
            skills={[
            {
                name: 'Dart',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png',
            },
            {
                name: 'Flutter',
                icon: 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg',
            },
            ]}
            imgPath={`${process.env.PUBLIC_URL}/lightweight.png`}
          />
          <Card
            href="https://github.com/Rezlang/ComputationalVision" target="_blank"
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
            imgPath={`${process.env.PUBLIC_URL}/computerVision.png`}
          />
        </ul>
        <div id='job-section'>
        <Jobs />
        </div>
      </main>
      <style>
        {`
          main {
            margin: auto;
            max-width: 100%;
            color: white;
            font-size: 20px;
            line-height: 1.6;
          }

          .astro-a {
            position: absolute;
            left: 50%;
            transform: translatex(-50%);
            width: 220px;
            height: auto;
            z-index: -1;
          }

          

          h1 {
            font-size: 4rem;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            margin-bottom: 1em;
          }

          .text-gradient {
            background-image: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 400%;
            background-position: 0%;
          }

          

          .link-card-grid {
            display: grid;
            grid-template-columns: 1fr;  /* Default to one column on smaller screens */
            gap: 2rem;
            padding: 0;
            overflow: shown;
          }
          
          @media (min-width: 700px) { /* Adjust the breakpoint as needed */
            .link-card-grid {
              grid-template-columns: repeat(2, 1fr); /* Two columns on larger screens */
            }
          }
          
        `}
      </style>
    </Layout>
  );
};

export default Home;