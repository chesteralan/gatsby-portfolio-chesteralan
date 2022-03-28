import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

type Props = {};
type Formatter = {
  title: string;
  thumbnail: string;
  publish_date: string;
};
type Fields = {
  rawFileName: string;
};
type ArticleSummary = {
  frontmatter: Formatter;
  excerpt: string;
  fields: Fields;
};

function BlogSection({}: Props) {
  const data = useStaticQuery(graphql`
    query {
      contentYaml(
        fields: {
          fileName: { eq: "page-sections-blog" }
          parentFolder: { eq: "content" }
        }
      ) {
        enabled
        section_title
      }

      allMarkdownRemark(sort: {fields: frontmatter___publish_date, order: DESC}) {
        nodes {
          frontmatter {
            publish_date(formatString: "MMMM DD, YYYY")
            thumbnail
            title
          }
          excerpt
          fields {
            rawFileName
          }
        }
      }
    }
  `);

  const { enabled, section_title } = data.contentYaml;
  const { nodes: articles } = data.allMarkdownRemark;

  if( !enabled ) return <></>;
  
  return (
    <section id="blog" className="pb-0">
      <div className="container">
        <div className="section-title h2 text-center mb-8">
          <h2 className="mb-0">{section_title}</h2>
          <span className="title-letter">{section_title.charAt(0)}</span>
        </div>
        <div className="row">
          {articles.map(
            (
              {
                frontmatter: { title, thumbnail, publish_date },
                fields: { rawFileName },
                excerpt,
              }: ArticleSummary,
              index: number
            ) => (
              <div
                key={index.toString()}
                className="col-sm-6 col-md-4 mb-4 mb-md-0"
              >
                <article className="news-block border-0">
                  <div className="news-body p-0">
                    <div className="mb-4">
                      <Link to={rawFileName}>
                        <img
                          className="img-fluid w-100 rounded"
                          src={thumbnail}
                          alt=""
                        />
                      </Link>
                    </div>
                    <small className="d-block mb-1">{ publish_date }</small>
                    <h2 className="h4 mb-1">
                      <Link to={rawFileName}>{title}</Link>
                    </h2>
                    <p>{excerpt}</p>
                  </div>
                </article>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
