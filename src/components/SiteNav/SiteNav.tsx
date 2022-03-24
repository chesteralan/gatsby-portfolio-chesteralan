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
								<a href="#services" className="scrollto">Services</a>
							</li>
							<li>
								<a href="#portfolio" className="scrollto">Portfolio</a>
							</li>
							<li>
								<a href="#news" className="scrollto">News</a>
							</li>
							<li>
								<a href="#contact" className="scrollto">Contact</a>
							</li>
						</ul>
					</nav>
  )
}

export default SiteNav