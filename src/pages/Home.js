import React from 'react';

//import images
import Midjourney from '../img/home/2.png';

//import Link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

//import transitions 
import { transition1 } from '../transitions';


const Home = () => {
  return (
    <motion.section 
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity: 0 }}
      transition={{transition1}}
      className='section'
    >
      <div className='container mx-auto'>
        {/* text & img warpper*/}
        <div className='flex flex-col justify-center'>
          {/*text title*/}
          <motion.div 
          initial={{opacity:0,y:'-50%'}}
          animate={{opacity: 1, y:0}}
          exit={{opacity: 0, y:'-50%'}}
          transition={{transition1}}

          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 
          lg:w-auto z-10 lg:absolute flex flex-col 
          justify-center items-center lg:items-start'>
            <h1 className='h1'> 
              Frontend  <br /> & Fullstack <br /> Developer
            </h1>
            <p className='text-[26px] lg:text-[36px] 
            font-primary mb-4 lg:mb-12'>"Every Senior was once a Junior.." </p>
            <Link to={'/contact'} className='btn mb-[30px]'>hire me</Link>
          </motion.div>
          {/*Img cover*/}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
            initial={{scale:0}}
            animate={{scale: 1}}
            exit={{scale: 0 }}
            transition={{transition1}}
             className='relative lg:-right-40 overflow-hidden'>
              <motion.img
              whileHover={{scale:1.1 }}
              transition={transition1} 
              src={Midjourney} alt=''/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

