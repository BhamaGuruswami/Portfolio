import React, { useState } from 'react';
import "./Story.css";
import Typography from '@mui/material/Typography';

function Story() {
  const [isMobile,setIsMobile]= useState(false)

  return (
    <div className='container'>
      <Typography className='text' paddingLeft={14} color={'black'} paddingRight={13}
    mt={5} align={'justify'}>
      I am currently finishing my 7-month training course at Becode.I am therefore looking for an internship opportunity for a period of 2 months possibility to extend to 3 months starting from November to December
     During my training, I was able to develop my skills in html,css,javascript and react
        Passionate about creating interactive applications
        eagerly want to learn new technology
         </Typography>
         </div>
  );
}

export default Story;

