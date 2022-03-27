import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
    dark?: boolean
}

function SocialMediaIcons({ dark }: Props) {

    const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "settings-social-media"}, parentFolder: {eq: "content"}}
		) {
			facebook_url
			github_url
			linkedin_url
		}
	  }
	`);

	const { facebook_url, github_url, linkedin_url } = data.contentYaml;

  return (
    <nav>
						<ul className="list-inline text-center">
							<li className="list-inline-item">
								<a className={`btn btn-sm btn-icon btn-outline-${dark ? 'dark' : 'white'} border-0 rounded-circle`} href={facebook_url} target="_blank" title="Facebook">
									<span className="btn-icon-inner fab fa-facebook-f"></span>
								</a>
							</li>
							<li className="list-inline-item">
								<a className={`btn btn-sm btn-icon btn-outline-${dark ? 'dark' : 'white'} border-0 rounded-circle`} href={github_url} target="_blank" title="Github">
									<span className="btn-icon-inner fab fa-github"></span>
								</a>
							</li>
							<li className="list-inline-item">
								<a className={`btn btn-sm btn-icon btn-outline-${dark ? 'dark' : 'white'} border-0 rounded-circle`} href={linkedin_url} target="_blank" title="LinkedIn">
									<span className="btn-icon-inner fab fa-linkedin"></span>
								</a>
							</li>
						</ul>
					</nav>
  )
}

export default SocialMediaIcons