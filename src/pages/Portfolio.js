import React from 'react';

//import images
import  Image1 from '../img/portfolio/1.png'; //project 1
import  Image2 from '../img/portfolio/2.png'; //project 2
import  Image3 from '../img/portfolio/3.png'; //project 3

//import motion
import { motion } from 'framer-motion';

//import transition
import { transition1 } from '../transitions';


const Portfolio = () => {
  return (
    <motion.section
    initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity: 0 ,y:'100%'}}
      transition={{transition1}}
     className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex-row flex-wrap:nowrap items-center justify-start gap-x-24 text-center pt-24 lg:pt36 pb-8'>
          {/*text*/}
          <motion.div
          initial={{opacity:0,y:'-10%'}}
          animate={{opacity: 1}}
          exit={{opacity: 0 ,y:'-20%'}}
          transition={{transition1}}
          >
            <h1 className='h1'>Portfolio</h1>
          </motion.div>
          {/*images*/}
          <div className='card-deck mx-auto justify-content-center'>
            <div className='card' style={{width: '25rem'}}>
              <motion.img 
              whileHover={{scale:1.1 }}
              transition={transition1} 
              className='card-img-top' src={Image1} alt='Card image cap'/>
              <div className='card-body'>
                <h5 className='card-title'>MiniGame - BunnyHop</h5>
                <p className='card-text'>This is a mini game build with HTML,CSS & Javascript where you play as a rabbit who needs to avoid hitting Easter egg. The code sets up the game screen, keeps track of your score, and starts the game when you press the space bar.
                <br/>  </p>
              <a href='https://github.com/KerenPetras/Hackthon-BunnyHop-Collab' className='btn btn-primary'>GitHub</a>
              <a href='https://kerenpetras.github.io/Hackthon-BunnyHop-Collab/' className='btn btn-primary'>Demo</a>
              </div>
            </div>
            <div className='card' style={{width: '22.3rem'}}>
              <motion.img 
              whileHover={{scale:1.1 }}
              transition={transition1}  className='card-img-top' src={Image2} alt='Card image cap'/>
              <div className='card-body'>
                <h5 className='card-title'>Pokemon Pokedex API
                </h5>
                <p className='card-text'>The project is a website created in Node.js and inspired by the world of Pokemon. I used the PokeAPI, a free and open-source API for Pokemon-related data, to fetch information about different Pokemon species. </p>
                <a href='https://github.com/KerenPetras/PokeAPI' className='btn btn-primary'>GitHub</a>
              <a href='https://kerenpetras.github.io/Hackthon-BunnyHop-Collab/' className='btn btn-primary'>Video Explanation</a>
              </div>
            </div>
            <div className='card' style={{width: '25rem'}}>
              <motion.img 
              whileHover={{scale:1.1 }}
              transition={transition1}  className='card-img-top' src={Image3} alt='Card image cap'/>
              <div className='card-body'>
                <h5 className='card-title'>Israel Kababayan Explorers</h5>
                <p className='card-text'>project aimed at helping my parents' small business, which specializes in arranging trips for the Filipino-Israeli community. The project involves creating a website and online booking system to streamline the booking process and improve customer experience.</p>
                <a href='https://github.com/KerenPetras/Hackthon-BunnyHop-Collab' className='btn btn-primary'>GitHub</a>
              <a href='https://kerenpetras.github.io/Hackthon-BunnyHop-Collab/' className='btn btn-primary'>Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
