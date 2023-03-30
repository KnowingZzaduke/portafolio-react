import Html from "/img/html.png";
import Sass from "/img/sass.png";
import React from "/img/react.png";
import GitHub from "/img/github.png";
import Figma from "/img/figma.png";
export function Skills() {
  return (
    <div className="content_skills">
      <div className="content_titulo">
        <h2>Skills</h2>
      </div>
      <div className="skills">
        <div className="skill">
          <img src={Html} />
          <p>Html</p>
        </div>
        <div className="skill">
          <img src={Sass} />
          <p>Sass</p>
        </div>
        <div className="skill">
          <img src={React} />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={GitHub} />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={Figma} />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}
