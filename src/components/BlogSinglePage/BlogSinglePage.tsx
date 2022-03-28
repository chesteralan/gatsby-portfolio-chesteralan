import React from 'react'


type Props = {
    data: {
        markdownRemark: {
            frontmatter: { 
                title: string,
                tags: string[],
                publish_date: string,
                category: string
            }
            html: string
        }
    }
}

function BlogSinglePage(props: Props) {
    const { data } = props;
  const { frontmatter, html } = data.markdownRemark;
  const { title, publish_date, tags, category } = frontmatter;
  return (
    <section>
						<div className="container">
							<div className="row text-center mb-8">
								<div className="col-lg-9 mx-lg-auto">
									<h2 className="mb-3">{title}</h2>
									<p className="text-muted">{publish_date} in <a href="#">{category}</a></p>
								</div>
							</div>

							<div className="row mb-8">
								<div className="col-lg-9 mx-lg-auto" dangerouslySetInnerHTML={{ __html: html }} />
								<div className="col-lg-9 mx-lg-auto mt-5">
                                {tags?.length > 0 && <ul className="list-inline text-center">
                                    {tags.map((tag) => (
										<li className="list-inline-item pb-3" key={tag}>
											<a className="btn btn-xs btn-light btn-pill" href="#">{tag}</a>
										</li>
                                    ))}
									</ul>}
                                </div>
							</div>

							
						</div>
					</section>
  )
}

export default BlogSinglePage;

