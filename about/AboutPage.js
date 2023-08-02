import React, { useState } from 'react';
import AboutHeader from './AboutHeader';
import NavMobile from './AboutNavMobile';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutSpacial from './AboutSpacial';
import Chef from './Chef';
import About from './About';
import Footer from './Footer';

const AboutPage = () => {
  const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
      <AboutHeader setNavMobile={setNavMobile}/>
      <AboutHero />
       {/* mobile nav */}
       <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-[340px] transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
      <AboutSpacial />
      <About />
      <AboutIntro />
      <Chef />
      <Footer />
    </div>
  )
}

export default AboutPage