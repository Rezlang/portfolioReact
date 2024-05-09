import React from 'react';

interface Skill {
  name: string;
  icon: string; // URL to the skill's logo image
}

interface Props {
  title: string;
  body: string;
  href: string;
  imgPath: string;
  skills: Skill[];
}

const Card: React.FC<Props> = ({ href, title, body, skills, imgPath }) => {
  return (
    <li className="link-card">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <img src={imgPath} alt="Image Description" className="card-image" />
        <p>{body}</p>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-icon-container">
                <img
                  className="skill-icon"
                  src={skill.icon}
                  alt={skill.name}
                  title={skill.name}
                  width="24"
                  height="24"
                />
              </div>
              <div className="skill-name-container">{skill.name}</div>
            </div>
          ))}
        </div>
      </a>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

        .card-image {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 0 auto;
        }

        .skill-icon {
          border-radius: 4px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .skill-icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .skill-name-container {
          opacity: 0;
          text-align: center;
          font-size: 0.6rem;
          transition: opacity 0.2s ease;
          font-family: inhert;
        }

        .skill-icon-container:hover + .skill-name-container {
          opacity: 1;
        }

        .skill-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .link-card {
          list-style: none;
          display: flex;
          padding: 1%;
          background-color: rgba(35, 38, 45, 1);
          border-radius: 7px;
          background-position: 100%;
          transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.3s ease;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          opacity: 0.7;
          
        }

        .link-card > a {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 100%;
          text-decoration: none;
          line-height: 1.4;
          padding: 1%;
          border-radius: 7px;
          color: white;
          background-color: rgb(var(--card-background-grey));
          transition: background-color 0.2s ease;
        }

        .link-card:is(:hover, :focus-within) {
          background-image: var(--accent-gradient-dark);
        }

        .link-card:is(:hover, :focus-within) > a {
          background-color: rgba(35, 38, 45, 0.6);
        }

        .link-card:hover h2 {
          color: rgb(136, 58, 234);
        }

        h2 {
          color: rgb(var(--accent));
          margin: 1%;
          font-size: 1.25rem;
          font-family: 'Roboto Mono', monospace;
          font-weight: heavy;
          transition: color 0.2s ease;
        }

        p {
          align-self: center;
          margin: 2%;
          font-family: 'Roboto Mono', monospace;
          font-weight: normal;
          font-size: 1rem;
        }
      `}</style>
    </li>
  );
};

export default Card;