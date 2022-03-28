import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}
type Nav = {
	title: string,
	url: string,
}
function SiteNav({}: Props) {

	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "settings-site-navigation"}, parentFolder: {eq: "content"}}
		) {
			navigation {
				title
				url
			}
		}
	  }
	`);

	const { navigation } = data.contentYaml;

  return (
    <nav className="site-nav">
						<ul id="navigation">
							{navigation.map(({ title, url }:Nav,index:number) => (
							<li key={index.toString()}>
								<Link to={url} className="scrollto" title={title}>{title}</Link>
							</li>
							))}
						</ul>
					</nav>
  )
}

export default SiteNav