import React from 'react';
// import components
import Hero from './components/Hero';
import NavLinks from './components/NavLinks';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <NavLinks />
      {/* 
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer /> */}
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
