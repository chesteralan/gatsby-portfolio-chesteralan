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

import {Helmet} from "react-helmet";
import { graphql } from 'gatsby'

type Props = {
	data: { 
		contentYaml: {
			display_name: string,
			title: string,
		}
	}
}
const IndexPage = ( { data }: Props) => {

	const { display_name, title } = data.contentYaml;

  return (<>
  <Helmet title={`${display_name} - ${title}`}>
  </Helmet>
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
		</>
  )
}

export default IndexPage

export const query = graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-cover"}, parentFolder: {eq: "content"}}
		) {
		  title
		  display_name
		}
	  }
	`