import React from "react";
import "../App.scss";
import "./Second.scss";

const Second = () => {
  return (
    <section className="second-section">
      <aside className="desc">
        <h1 className="title">
          I’m a <br /> Header
        </h1>
        <p className="paragraph">
          This is a template landing page, created with Figma and Anima. No
          coding involved.
        </p>
        <div className="buttons">
          <button className="cta">CTA</button>
          <button className="gohst">Gohst</button>
        </div>
      </aside>
      <aside className="img">
        <div className="img-container"></div>
      </aside>
    </section>
  );
};

export default Second;
