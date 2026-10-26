import React from 'react'
import HexGrid from '../../HexaGon/Hexagon'
import { NavBar } from '../../components/navbar/NavBar'
import OurProject from '../../components/OurProjects/OurProject'
import Footer from '../../components/Footer/Footer'
import AboutUs from "../../components/AboutUs/AboutUs";
import ServicesGrid from '../../components/ServicesGrid/ServicesGrid'
import ContactSection from "../../components/ContactSection/ContactSection"
import TechTimeline from '../../components/technologies/TechTimeline'
export const Home = () => {
  return (
    <div>
        <NavBar/>
        <HexGrid/>
        <AboutUs/>
        <OurProject/>
        <ServicesGrid/>
        <TechTimeline/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}
