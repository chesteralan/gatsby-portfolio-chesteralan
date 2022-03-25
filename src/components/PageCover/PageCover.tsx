import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}

function PageCover({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-cover"}, parentFolder: {eq: "content"}}
		) {
		  title
		  display_name
		  photo
		}
	  }
	`);

	const { display_name, title, photo } = data.contentYaml;

  return (
    <div id="page-cover" className="page-cover">
					<div className="page-cover-wrapper-fixed">
						<div className="page-cover-bg">
							<div className="overlay-inner bg-dark opacity-55"></div>
						</div>
						<div className="page-cover-wrap">

							<section id="home" className="d-flex min-vh-100">
								<div className="container align-self-center text-white text-center">
									<div className="avatar avatar-xxl mb-6">
										<div className="avatar-shape avatar-shape-rounded bg-white mt-n2 mb-n2 mr-n2"></div>
										<img src={photo} alt="" className="avatar-img rounded-circle shadow-light" />
									</div>
									<h1 className="mb-2 mb-lg-3">{display_name}</h1>
									<p className="lead mb-0">{title}</p>
									<span className="cover-letter letter-xl text-white opacity-10">{ display_name.charAt(0) }</span>
								</div>
							</section>

						</div>
					</div>
				</div>
  )
}

export default PageCover