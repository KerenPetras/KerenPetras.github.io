import React from 'react';
//import icons

import {
  ImFacebook,
  ImLinkedin,
  ImGithub,
} from 'react-icons/im'


const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href='https://www.facebook.com/kerenpetras/' target='_blank' rel='noreferrer'> 
      <ImFacebook />
      </a>
      </li>
      <li><a href='https://www.linkedin.com/in/kerenpetras/' target='_blank' rel='noreferrer'> 
      <ImLinkedin />
      </a>
      </li>  <li><a href='https://github.com/KerenPetras' target='_blank' rel='noreferrer'> 
      <ImGithub />
      </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
