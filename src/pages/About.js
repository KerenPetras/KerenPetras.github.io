import React from 'react';

//import images
import Me from '../img/about/Me.png';
import html from '../img/about/html.png';
import css from '../img/about/css.png';
import js from '../img/about/js.png';
import bootstrap from '../img/about/bootstrap.png';
import postgre from '../img/about/postgre.png';
import git from '../img/about/git.png';
import csharp from '../img/about/csharp.png';
import nodejs from '../img/about/node.png';
import ts from '../img/about/typescript.png';
import react from '../img/about/react.png'

//import download file
import cv from '../files/KerenPetrasCV.pdf';

//import motion
import { motion } from 'framer-motion';

//import transition
import { transition1 } from '../transitions';


const About = () => {
  return (
  <motion.section 
      initial={{opacity:0,y: '100%'}}
      animate={{opacity: 1, y:0}}
      exit={{opacity: 0 , y:'100%'}}
      transition={{transition1}}
      className='section'
      >
    <div className='container mx-auto h-full relative'>
      {/*text & img wrapper*/}
      <div className='flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24
      text-center lg:text-left lg:pt-16'>

        {/*img*/}
        <motion.div
        whileHover={{scale:1.1 }}
        transition={transition1} 
        className='flex-1 max-h-96 lg:max-h-max order-2 
        lg:order-none overflow-hidden'>
          <img src={Me} alt='' />
        </motion.div>

        {/*text*/}
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, y:'-80%'}}
        transition={{transition1}}
         className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About Me</h1>
           <p className=' mb-12 max-w-sm'>I'm Keren Cudal Petras a passionate frontend and fullstack developer from Israel.
           <br />
           <br />
           I'm a hard-working and creative team player, seeking to find my first position to grow, create and find new challenges in the software industry. 
           <br />
           <br />
           <p>
           <b>*</b> Graduated professional and practical Javascript Fullstack bootcamp in <b>Developers Institude.</b> <br />
           <b>*</b> Graduated professional and practical Fullstack.NET course in <b>John Bryce Training.</b>
           </p>
           <br />
           <div className='iconlangs'>
           <img src={html} alt='' />
           <img src={css} alt='' />
           <img src={js} alt='' />
           <img src={ts} alt='' />
           <img src={csharp} alt='' />
           <img src={react} alt='' />
           <img src={bootstrap} alt='' />
           <img src={nodejs} alt='' />
           <img src={git} alt='' />
           <img src={postgre} alt='' />
           </div>           
 </p>
 <a class="btn" download href={cv}>Download cv</a>
        </motion.div>
      </div>
    </div>
  </motion.section>
  )
};

export default About;
