import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BlogSinglePage from '../components/BlogSinglePage/BlogSinglePage'

import {Helmet} from "react-helmet";
import { graphql } from 'gatsby'

type Props = {
	data: { 
		markdownRemark: { 
			frontmatter: {
				title: string,
				tags: string[],
				publish_date: string
				category: string
			}
			html: string
		} 
	}
}

const BlogTemplate = (props: Props) => {
	
	const { data } = props;
	const { title } = data.markdownRemark.frontmatter;

  return (<>
  <Helmet title={`${title}`}>
  </Helmet>
    <div className="site-container">
			
			<Header />

			<div className="page-wrapper">
				
				<div className="page-content">

					<BlogSinglePage data={data} />
	
					<Footer />

				</div>
			</div>

		</div>
		</>
  )
}

export default BlogTemplate;

export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: {rawFileName: {eq: $slug}}) {
          frontmatter {
            title
            tags
			publish_date(formatString: "MMMM DD, YYYY")
			category
          }
          html
        }
}
`