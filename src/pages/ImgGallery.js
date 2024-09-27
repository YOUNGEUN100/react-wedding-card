import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';

import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import s5 from '../images/s5.png';

function ImgGallery() {

  const images = [
    {
      original: p1,
      thumbnail: s1,
    },
    {
      original: p2,
      thumbnail: s2,
    },
    {
      original: p3,
      thumbnail: s3,
    },
    {
      original: p4,
      thumbnail: s4,
    },
    {
      original: p5,
      thumbnail: s5,
    },
  ];

  
  return (
    <div className='bc-pink container'>
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery