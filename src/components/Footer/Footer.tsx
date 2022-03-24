import React from 'react'

type Props = {}

const Footer = ({}: Props) => {
	
  return (
    <footer className="site-footer bg-light">
						<div className="container">
							<nav className="mb-3">
								<ul className="list-inline text-center">
									<li className="list-inline-item">
										<a className="btn btn-sm btn-icon btn-outline-dark border-0 rounded-circle" href="#">
											<span className="btn-icon-inner fab fa-facebook-f"></span>
										</a>
									</li>
									<li className="list-inline-item">
										<a className="btn btn-sm btn-icon btn-outline-dark border-0 rounded-circle" href="#">
											<span className="btn-icon-inner fab fa-instagram"></span>
										</a>
									</li>
									<li className="list-inline-item">
										<a className="btn btn-sm btn-icon btn-outline-dark border-0 rounded-circle" href="#">
											<span className="btn-icon-inner fab fa-twitter"></span>
										</a>
									</li>
									<li className="list-inline-item">
										<a className="btn btn-sm btn-icon btn-outline-dark border-0 rounded-circle" href="#">
											<span className="btn-icon-inner fab fa-pinterest"></span>
										</a>
									</li>
								</ul>
							</nav>
							<p className="text-center">&copy; {new Date().getFullYear()} Malat - All Rights Reserved</p>
						</div>
					</footer>
  )
}

export default Footer