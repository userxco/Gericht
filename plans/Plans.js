import React, { useState } from 'react';
import AboutHeader from './AboutHeader';
import NavMobile from './AboutNavMobile';
import PlansMenu from './PlansMenu';
import Video from './Video';
import Footer from './Footer';
import Hero from './Hero';

const AboutPage = () => {
  const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
      <AboutHeader setNavMobile={setNavMobile}/>
      <Hero />
       {/* mobile nav */}
       <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-[340px] transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
     <PlansMenu />
     <Video />
      <Footer />
    </div>
  )
}

export default AboutPage