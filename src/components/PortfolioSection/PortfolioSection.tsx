import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Category = {
	key: string,
	title: string
}
type Portfolio = {
	title: string,
	url: string,
	photo: string,
	category: string,
}

function PortfolioSection({}: Props) {

	const [filter, setFilter] = useState("");

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-portfolio"}, parentFolder: {eq: "content"}}
		) {
			enabled
			section_title
			categories {
				key
				title
			}
			portfolios {
				category
				title
				url
				photo
			}
		}
	  }
	`);

	const { enabled, section_title, categories, portfolios } = data.contentYaml;
	
	if( !enabled ) return <></>;

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
											<li><a href="#portfolio" className={filter === "" ? "active" : ""} onClick={() => setFilter("")}>All</a></li>
											{categories.map(({key,title}:Category) => (
												<li key={key}>
													<a href="#portfolio" className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{title}</a>
												</li>
											))}
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className="container">

							<div className="portfolio-container isotope-container row my-n2 mx-sm-n2">

							{portfolios.filter((p:any) => p.category === filter || filter === "" ).map(({ category, title, photo, url }: Portfolio, index: number) => {
								
								let show = false;
								setTimeout(() => { show = true }, 5 * index)

								return show && (<div key={index.toString()} className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web slide-up-now-opacity">
								<div className="portfolio-item details-inside">
									<a href={url} target="_blank">
										<div className="item-media">
											<img src={photo} alt="" />
										</div>
										<div className="item-overlay bg-dark"></div>
										<div className="item-details">
											<h4 className="h5">{title}</h4>
											<p className="font-italic">{category}</p>
										</div>
									</a>
								</div>
							</div>)

								}
)}

							</div>
						</div>
					</section>
  )
}

export default PortfolioSection