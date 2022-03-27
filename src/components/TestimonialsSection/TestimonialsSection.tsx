import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Testimonial = {
	name: string,
	company: string,
	quote: string,
	photo: string,
}
function TestimonialsSection({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-testimonials"}, parentFolder: {eq: "content"}}
		) {
			background_image
			testimonials {
				name
				company
				quote
				photo
			}
		}
	  }
	`);

	const { background_image, testimonials } = data.contentYaml;

  return (
    <section id="testimonials">
						<div className="overlay">
							<div className="overlay-inner bg-image-holder bg-cover bg-center" style={{ backgroundImage: `url(${background_image})`}}></div>
							<div className="overlay-inner bg-dark opacity-70"></div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-11 col-xl-10 mx-lg-auto text-center text-white">
									<div className="slider dots-light dots-outside" data-slick='{"dots":true,"arrows":false}'>
										
										{testimonials.map(({ name, company, quote, photo }: Testimonial, index: number) =>(
										<div key={index.toString()}>
											<div className="icon icon-5x mb-8">
												<i className="fa fa-quote-right"></i>
											</div>
											<blockquote>
												<p className="mb-5">{quote}</p>
												<footer className="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
																										<div className="avatar">
														<img src={photo} alt={name} className="avatar-img rounded-circle shadow-dark" />
													</div>
													<div className="ml-5">
														<h4 className="h6 mb-0">{name}</h4>
														<small className="d-block">{company}</small>
													</div>
												</footer>
											</blockquote>
										</div>
										))}
										
									</div>
								</div>
							</div>
						</div>
					</section>
  )
}

export default TestimonialsSection