import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Développé par Louis Blonde de 2ndB au{" "}
        <a href="http://claveille.org/" target="_blank" rel="noreferrer">
          Lycée Albert Claveille
        </a>{" "}
        :{" "}
      </p>
      <a
        className="linkBy"
        href="https://www.instagram.com/omonyx_sama/"
        target="_blank"
        rel="noreferrer"
      >
        Insta
      </a>
      <a
        className="linkBy"
        href="https://github.com/Omonix"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default Footer;
