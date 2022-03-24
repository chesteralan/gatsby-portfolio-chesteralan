import React from 'react'
import PageCover from '../components/PageCover/PageCover'
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'
import BlogSection from '../components/BlogSection/BlogSection'
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ExperienceSection from '../components/ExperienceSection/ExperienceSection'
import SkillsSection from '../components/SkillsSection/SkillsSection'

const IndexPage = () => {
  return (
    <div className="site-container">
			
			<Header />

			<div className="page-wrapper">
				<PageCover />

				<div className="page-content">

					<AboutSection />

					<SkillsSection />

					<ExperienceSection />

					<ServicesSection />

					<PortfolioSection />

					<TestimonialsSection />

					<BlogSection />

					<ContactSection />

					<Footer />

				</div>
			</div>

		</div>
  )
}

export default IndexPage