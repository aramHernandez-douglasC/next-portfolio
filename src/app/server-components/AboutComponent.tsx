import React from 'react';
import AboutSection from '../components/AboutSection';
import { getUserInfo } from "@/app/api/SanityRepository" ;

const AboutComponent = async () => {
  const data = await getUserInfo();
  return (
    <>
      <AboutSection props={data}/>
    </>
  )
}

export default AboutComponent
