import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Service = {
	title: string,
	description: string,
	icon: string,
}

function ServicesSection({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-services"}, parentFolder: {eq: "content"}}
		) {
			enabled
			section_title
			description
			services {
				title
				description
				icon
			}
		}
	  }
	`);

	const { enabled, section_title, description, services } = data.contentYaml;

	if( !enabled ) return <></>;
	
  return (
    <section id="services" className="pb-0">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
									<div className="section-title h2 mb-3">
										<h2 className="mb-0">{section_title}</h2>
										<span className="title-letter">{section_title.charAt(0)}</span>
									</div>
									<p>{description}</p>
								</div>
							</div>
							<div className="row my-n2 mx-sm-n2">

								{services.map(({ title, description, icon }: Service, index: number) => (
								<div key={index.toString()} className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className={icon}></i>
											</div>
										</div>
										<h3 className="h4 mb-2">{title}</h3>
										<p>{description}</p>
									</div>
								</div>
								) )}

							</div>
						</div>
					</section>
  )
}

export default ServicesSection