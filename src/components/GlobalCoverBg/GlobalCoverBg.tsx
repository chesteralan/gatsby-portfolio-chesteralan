import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {}

function GlobalCoverBg({}: Props) {

  const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-cover"}, parentFolder: {eq: "content"}}
		) {
		  background_image
		}
	  }
	`);

	const { background_image } = data.contentYaml;
  
  return (
    <div className="global-cover-bg">
				<div className="overlay-inner bg-cover" style={{ backgroundImage: `url(${background_image || "/images/image-1.jpeg"})`}} />
			</div>
  )
}

export default GlobalCoverBg