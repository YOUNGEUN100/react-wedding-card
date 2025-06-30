// src/components/Start.js
import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const FrontCover = ({faceOut}) => {

  return (
    <div className="front-box">
      <TypeAnimation
            sequence={[
              'Welcome\nTo our wedding',
              2000, // Waits 2s
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={30} 
            // repeat={Infinity}
            style={{ whiteSpace: 'pre-line',fontSize: '4em', display: 'inline-block'}}
      />
    </div>
  );
};

export default FrontCover;