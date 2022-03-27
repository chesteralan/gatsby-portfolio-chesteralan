import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
type Props = {}

const Footer = ({}: Props) => {
	
	const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-cover"}, parentFolder: {eq: "content"}}
		) {
			display_name
		}
	  }
	`);

	const { display_name } = data.contentYaml;

  return (
    <footer className="site-footer bg-light">
						<div className="container">

							<SocialMediaIcons dark />

							<p className="text-center">&copy; {new Date().getFullYear()} {display_name} - All Rights Reserved</p>
						</div>
					</footer>
  )
}

export default Footer