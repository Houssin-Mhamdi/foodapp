import React, { useEffect, useState } from 'react';
// import components
import Nav from '../components/Nav';
// import logo
import logoKiwii from '../assets/img/logo.png';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';
import NavBar from './NavBar';
import SearchComp from './Search/SearchComp.jsx';

// header variants
const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0,0,0,0.92)',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? 'show' : ''}
      className='bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4'
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial='hidden'
        animate={'show'}
        className='container mx-auto'
      >
        <div className='flex justify-between items-center   lg:px-0 relative text-white '>
          {/* menu button */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
            className='order-1 lg:order-none lg:ml-[-2rem] '
          >
            <a href='#'>
              {/* if header is active make logo 90 x 90 px else 107 x 107px */}
              <img
                className={`${isActive ? 'w-[200px]' : 'w-[200px] '
                  }`}
                src={logoKiwii}
                alt=''
              />
            </a>
          </motion.div>
          {/* logo */}
          <div >
            <NavBar />
          </div>
          {/* social icons */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.4, 1.4)}
            className='hidden lg:flex'
          >
            <div>
              <SearchComp />
            </div>
            {/* <Socials /> */}
          </motion.div>
          {/* nav */}
          <motion.div
            variants={navVariants}
            initial='hidden'
            animate={nav ? 'show' : ''}
            className='absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
