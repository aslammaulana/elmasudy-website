import SvgDivider from '@/components/elements/SvgDivider'
import SectionHeader from '@/components/homePage/00-SectionHeader/SectionHeader'
import Hero from '@/components/homePage/01-HeroSection/Hero'
import AdvantageSection from '@/components/homePage/02-AdvantageSection/Advantage'
import DaurahSection from '@/components/homePage/03-Daurah/Daurah'
import ProgramSection from '@/components/homePage/04-ProgramSekolah/Program'
import AboutUs from '@/components/homePage/05-AboutUs/AboutUs'
import Vision from '@/components/homePage/06-Vision/Vision'
import Gallery from '@/components/homePage/07-Gallery/Gallery'
import Footer from '@/components/layoutPage/Footer/Footer'
import Navbar from '@/components/layoutPage/Navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className=" w-[100%]  mx-auto h-3  bg-[#21466d79]"></div>
      <AdvantageSection />
      <SectionHeader title="Program Daurah RAMADHAN" />
      <DaurahSection />
      <SectionHeader title="Program Sekolah" />
      <ProgramSection />
      <AboutUs />
      <Vision />
      <Gallery />
      <Footer/>
    </div>
  )
}
