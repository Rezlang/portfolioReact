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
              overflow-x: hidden;
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
            main {
              width: 90%;
            }
          `}
        </style>
      <div className="background-effects"></div>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;