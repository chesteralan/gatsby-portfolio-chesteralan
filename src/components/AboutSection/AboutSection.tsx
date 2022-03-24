import React from 'react'

type Props = {}

function AboutSection({}: Props) {
  return (
    <section id="about">
						<div className="container">
							<div className="section-title h2 text-center mb-8">
								<h2 className="mb-0">About Me</h2>
								<span className="title-letter">A</span>
							</div>
							<div className="row">
								<div className="col-md-6 col-lg-4 d-none d-lg-block">
									<img className="img-fluid w-100 rounded" src="/images/avatar.jpg" alt="" />
								</div>
								<div className="col-lg-8">
									<h3>Amanda Malat</h3>
									<p className="lead">UI/UX Designer</p>
									<p className="mb-5">I’m Amanda Malat a marketing specialist with over five years work experience. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus. Nulla at nisi tellus. Suspendisse potenti.</p>
									<div className="row mb-8">
										<div className="col-md-6 mb-5 mb-md-0">
											<h4 className="mb-4">Education</h4>
											<p className="h5">MA Online Marketing</p>
											<p>New York University, 2000 - 2003</p>
											<p className="h5">BA Business & Marketing</p>
											<p>Silver Oak College, 1998 - 2000</p>
										</div>

										<div className="col-md-6">
											<h4 className="mb-4">Awards</h4>
											<p className="h5">Best Product Launch</p>
											<p>FGA Marketing Awards, 2015</p>
											<p className="h5">Highly Commended</p>
											<p>Women in Business, 2010</p>
										</div>
									</div>
									<a href="#" className="btn btn-primary">Download CV</a>
									<a href="#contact" className="btn btn-light scrollto">Send Message</a>
								</div>
							</div>
						</div>
					</section>
  )
}

export default AboutSection