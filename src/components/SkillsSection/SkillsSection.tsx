import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Skill = {
	title: String,
	valuenow: String,
	valuemin: String,
	valuemax: String,
}
type Key = Number;

function SkillsSection({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-skills"}, parentFolder: {eq: "content"}}
		) {
			enabled
			section_title
			description
			skills {
				title
				valuenow
				valuemin
				valuemax
			}
		}
	  }
	`);

	const { enabled, section_title, description, skills } = data.contentYaml;
	
  if( !enabled ) return <></>;

  return (
    <section id="skills" className="bg-light">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
									<div className="section-title h2 mb-3">
										<h2 className="mb-0">{ section_title }</h2>
										<span className="title-letter">{ section_title.charAt(0) }</span>
									</div>
									<p>{ description }</p>
								</div>
							</div>
							<div className="row">
								{skills.map(({ title, valuenow }: Skill, index: Number) => <div key={index.toString()} className="col-md-6 mb-4 mb-md-0">
									<p className="h6 mb-1">{ title }</p>
									<div className="progress mb-6 rounded-0" style={{ height: "5px" }}>
										<div className="progress-bar" role="progressbar" style={{ width: `${valuenow}%` }} />
									</div>
								</div>
								)}
							</div>
						</div>
					</section>
  )
}

export default SkillsSection