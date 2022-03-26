import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Experiences = {
	position: string,
	company: string,
	started: string,
	ended: string,
	duration: string,
	description: string,
}

function ExperienceSection({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-experiences"}, parentFolder: {eq: "content"}}
		) {
			section_title
			experiences {
				position
				company
				started
				ended
				duration
				description
			}
		}
	  }
	`);

	const { section_title, experiences } = data.contentYaml;

  return (
    <section id="experience" className="pb-0">
						<div className="container">
							<div className="section-title h2 text-center mb-8">
								<h2 className="mb-0">{section_title}</h2>
								<span className="title-letter">{section_title.charAt(0)}</span>
							</div>

							<div className="experiences">
							{experiences.map(({position,company,started,ended,duration,description}: Experiences, index: number) => 
								<div key={index.toString()} className="row">
									<div className="col-lg-4 mb-1 mb-lg-0">
										<p className="h5 mb-0">{position}</p>
										<p className="opacity-75">{company}, {started} {(ended !== "" && ended) ? `- ${ended}` : ""}
										{duration && <><br />{duration}</>}</p>
									</div>
									<div className="col-lg-8" dangerouslySetInnerHTML={{ __html: description }}>
										
									</div>
									
								</div>
								
							)}
							</div>
						</div>
					</section>
  )
}

export default ExperienceSection