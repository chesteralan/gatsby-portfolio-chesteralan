import React from 'react'

type Props = {}

function SiteNav({}: Props) {
  return (
    <nav className="site-nav">
						<ul id="navigation">
							<li>
								<a href="#home" className="scrollto">Home</a>
							</li>
							<li>
								<a href="#about" className="scrollto">About</a>
							</li>
							<li>
								<a href="#services" className="scrollto">Technologies</a>
							</li>
							<li>
								<a href="#portfolio" className="scrollto">Portfolio</a>
							</li>
							<li>
								<a href="#testimonials" className="scrollto">Testimonials</a>
							</li>
							<li>
								<a href="#blog" className="scrollto">Blog</a>
							</li>
							<li>
								<a href="#contact" className="scrollto">Contact</a>
							</li>
						</ul>
					</nav>
  )
}

export default SiteNav