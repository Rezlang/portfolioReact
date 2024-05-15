// Layout.js
import '../../styles/background.scss';
import React from 'react';
import Header from '../header/header';

const Layout = ({ title, children }) => {
  return (
    <div>
      <title>{title}</title>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          :root {
            --card-background-grey: 35,38,45,0.7;
            --card-background-purple: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
            --accent: 136, 58, 234;
            --accent-light: 224, 204, 250;
            --accent-dark: 49, 10, 101;
            --accent-gradient: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%);
            --accent-gradient-dark: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-dark)) 30%, rgb(var(card-background-grey)) 60%);
          }
          html {
            font-family: "Roboto Mono", monospace;
            background: transparent;
            background-size: 224px;
          }
          code {
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
          .main-content {
            width: 50%;
            margin: 0 auto;
          }
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          @media screen and (max-width: 960px) {
            .main-content {
              width: 80%;
            }
          }

          body, html {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <Header />
      <div className='main-content'>
        <main>
          <div className="background-effects"></div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;