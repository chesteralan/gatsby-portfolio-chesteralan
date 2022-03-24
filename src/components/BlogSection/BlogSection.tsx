import React from 'react'

type Props = {}

function BlogSection({}: Props) {
  return (
    <section id="news" className="pb-0">
						<div className="container">
							<div className="section-title h2 text-center mb-8">
								<h2 className="mb-0">Latest News</h2>
								<span className="title-letter">L</span>
							</div>
							<div className="row">
								<div className="col-sm-6 col-md-4 mb-4 mb-md-0">
									<article className="news-block border-0">
										<div className="news-body p-0">
											<div className="mb-4">
												<img className="img-fluid w-100 rounded" src="/images/blog/blog-1.jpg" alt="" />
											</div>
											<small className="d-block mb-1">May 27, 2019</small>
											<h2 className="h4 mb-1">
												<a href="single-article.html">Building an enduring online audience</a>
											</h2>
											<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu.</p>
										</div>
									</article>
								</div>

								<div className="col-sm-6 col-md-4 mb-4 mb-md-0">
									<article className="news-block border-0">
										<div className="news-body p-0">
											<div className="mb-4">
												<img className="img-fluid w-100 rounded" src="/images/blog/blog-2.jpg" alt="" />
											</div>
											<small className="d-block mb-1">May 20, 2019</small>
											<h2 className="h4 mb-1">
												<a href="single-article.html">Building a site for your small business</a>
											</h2>
											<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu.</p>
										</div>
									</article>
								</div>

								<div className="col-sm-6 col-md-4">
									<article className="news-block border-0">
										<div className="news-body p-0">
											<div className="mb-4">
												<img className="img-fluid w-100 rounded" src="/images/blog/blog-3.jpg" alt="" />
											</div>
											<small className="d-block mb-1">May 13, 2019</small>
											<h2 className="h4 mb-1">
												<a href="single-article.html">A day in the life of a fitness blogger</a>
											</h2>
											<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu.</p>
										</div>
									</article>
								</div>
							</div>
						</div>
					</section>
  )
}

export default BlogSection