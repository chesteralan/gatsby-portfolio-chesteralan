import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Category = {
	key: string,
	title: string
}

function PortfolioSection({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-portfolio"}, parentFolder: {eq: "content"}}
		) {
			section_title
			categories {
				key
				title
			}
		}
	  }
	`);

	const { section_title, categories } = data.contentYaml;

  return (
    <section id="portfolio">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
									<div className="section-title h2 mb-3">
										<h2 className="mb-0">{section_title}</h2>
										<span className="title-letter">{section_title.charAt(0)}</span>
									</div>
									<nav className="portfolio-filter isotope-filter">
										<ul className="justify-content-center">
											<li><a href="#" className="active" data-filter="*">All</a></li>
											{categories.map(({key,title}:Category) => (
												<li key={key}>
													<a href="#" data-filter={`.${key}`}>{title}</a>
												</li>
											))}
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="portfolio-container isotope-container row my-n2 mx-sm-n2">
								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-1.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details">
												<h4 className="h5">Love</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 brand">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-2.html">
											<div className="item-media">
												<img src="/images/portfolio/project-2.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details">
												<h4 className="h5">Beautiful Girl - Gallery</h4>
												<p className="font-italic">Brand</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-3.html">
											<div className="item-media">
												<img src="/images/portfolio/project-3.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Future City - Youtube Iframe</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 design">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-2.html">
											<div className="item-media">
												<img src="/images/portfolio/project-4.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Golden Gate Bridge</h4>
												<p className="font-italic">Design</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-9.jpg" alt="" />
												</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Beach</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-3.html">
											<div className="item-media">
												<img src="/images/portfolio/project-6.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Mountains</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-10.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Adventure</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-2.html">
											<div className="item-media">
												<img src="/images/portfolio/project-11.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Waterfall</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-5.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Sea</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
  )
}

export default PortfolioSection