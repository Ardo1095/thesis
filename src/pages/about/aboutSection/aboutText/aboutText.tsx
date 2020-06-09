import React, { FC } from 'react';
import './aboutText.css';

const AboutText: FC = () => (
  <div className="aboutTextContainer">
    <div className="aboutTextHeaderContainer">
      <h1 className="quote">&ldquo;</h1>
      <h2 className="aboutTextHeader">
        NEW GENERATION <br /> OF POULTRY
      </h2>
    </div>

    <div>
      <div className="aboutTypeHeaderContainer">
        <h6 className="aboutTypeHeader">About</h6>
      </div>
    </div>

    <div className="aboutContentContainer">
      <p>
        Cum nomen prarere, omnes peses amor pius, rusticus racanaesadas. Ubi est mirabilis gemna? Cum gabalium velum, omnes fugaes
        Ubi est peritus devatio? A falsis, adelphis peritus apolloniates. Est raptus clabulare, cesaris. Cum pulchritudine
        manducare, omnes genetrixes captis bassus
      </p>
    </div>
  </div>
);

export default AboutText;
