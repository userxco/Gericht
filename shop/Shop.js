import React, {useState} from 'react';
import AboutHeader from './AboutHeader';
import NavMobile from './AboutNavMobile';
import AboutHero from './AboutHero';
import TeamMember from './TeamMember';
import Footer from './Footer';




const AboutPage = () => {

  
  const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
      <AboutHeader setNavMobile={setNavMobile}/>
      <AboutHero />
       {/* mobile nav */}
       <div className={`${navMobile ? 'right-0' : '-left-full'} fixed top-0 bottom-0 w-[340px] transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
      <TeamMember />
      <Footer />
    </div>
  )
}

export default AboutPage