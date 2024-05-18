import React from 'react';
import Card from './card.tsx';
import Jobs from './jobs/jobs.jsx';
import Layout from './layouts/Layout';
import BouncingWords from './bouncingWords/bouncingWords.jsx';
import DemoCard from './demoCard/demoCard.jsx';

const Home = () => {
  return (
    <Layout title="Welcome">
      <main>
        <div id="bounce">
          <BouncingWords />
        </div>
        <div className="headliner-container">
          <span className="wave">👋</span>
          <div className="headliner">
            Josh is a multi-talented full stack developer, with a focus on deep learning, NLP, and Computer Vision. He
            is currently pursuing a bachelors of computer science at RPI.
          </div>
        </div>
        <ul className="link-card-grid" id="projects-grid">
          <Card
            href="https://docs.astro.build/"
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
            imgPath="../../computerVision.png"
          />
          <Card
            href="https://astro.build/integrations/"
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
            imgPath="../../blockchain.png"
          />
          <Card
            href="https://astro.build/themes/"
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
            imgPath="../../lightweight.png"
          />
          <DemoCard/>
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

          .wave {
            font-size: 3rem;
            animation-name: wave-animation;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            transform-origin: 70% 70%;
            display: inline-block;
            margin-left: 2%;
            margin-right: 5%;
          }

          @keyframes wave-animation {
            0% { transform: rotate(0.0deg) }
            10% { transform: rotate(14.0deg) }
            20% { transform: rotate(-8.0deg) }
            30% { transform: rotate(14.0deg) }
            40% { transform: rotate(-4.0deg) }
            50% { transform: rotate(10.0deg) }
            60% { transform: rotate(0.0deg) }
            100% { transform: rotate(0.0deg) }
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

          .headliner-container {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            border: 1px solid rgba(var(--accent-light), 25%);
            background: var(--card-background-purple);
            padding: 1rem;
            border-radius: 8px;
            font-family: inhert;
            font-size: 1.1rem;
          }

          .headliner code {
            font-size: 0.8em;
            font-weight: bold;
            background: rgba(var(--accent-light), 12%);
            color: rgb(var(--accent-light));
            border-radius: 4px;
          }

          .headliner strong {
            color: rgb(var(--accent-light));
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