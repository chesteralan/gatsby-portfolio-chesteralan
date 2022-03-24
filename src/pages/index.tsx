import React from 'react'

const IndexPage = () => {
  return (
    <div className="site-container">

			<div id="top"></div>

			
			<a href="#home" className="mobile-logo mobile-logo-light">
				<div className="overlay">
					<div className="overlay-inner bg-dark opacity-50"></div>
				</div>
				<span>Amanda Malat</span>
			</a>

			
			<button type="button" id="navigation-toggle" className="nav-toggle nav-toggle-light">
				<div className="overlay">
					<div className="overlay-inner bg-dark opacity-50"></div>
				</div>
				<span></span>
			</button>

			
			<header className="site-header bg-transparent">
				<div className="header-inner">
					<div className="overlay">
						<div className="overlay-inner bg-dark opacity-85"></div>
					</div>
					<div className="header-brand">
						
						<a href="#" className="logo">
							<span>Amanda Malat</span>
							<span className="title-letter text-white opacity-15">A</span>
						</a>
					</div>
					<div className="nav-divider mb-8"></div>
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
					<div className="nav-divider my-8"></div>
					<nav>
						<ul className="list-inline text-center">
							<li className="list-inline-item">
								<a className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle" href="#">
									<span className="btn-icon-inner fab fa-facebook-f"></span>
								</a>
							</li>
							<li className="list-inline-item">
								<a className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle" href="#">
									<span className="btn-icon-inner fab fa-instagram"></span>
								</a>
							</li>
							<li className="list-inline-item">
								<a className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle" href="#">
									<span className="btn-icon-inner fab fa-twitter"></span>
								</a>
							</li>
							<li className="list-inline-item">
								<a className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle" href="#">
									<span className="btn-icon-inner fab fa-pinterest"></span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			
			<div className="header-overlay">
				<div className="overlay-inner bg-dark opacity-80"></div>
			</div>

			
			<button type="button" id="backtotop" className="btn btn-primary btn-icon">
				<span className="btn-icon-inner fas fa-angle-up"></span>
			</button>

			
			<div className="global-cover-bg">
				<div className="overlay-inner bg-image-holder bg-cover">
					<img src="/images/image-1.jpg" alt="background" />
				</div>
			</div>

			
			<div className="page-wrapper">
				<div id="page-cover" className="page-cover">
					<div className="page-cover-wrapper-fixed">
						<div className="page-cover-bg">
							<div className="overlay-inner bg-dark opacity-55"></div>
						</div>
						<div className="page-cover-wrap">

							<section id="home" className="d-flex min-vh-100">
								<div className="container align-self-center text-white text-center">
									<div className="avatar avatar-xxl mb-6">
										<div className="avatar-shape avatar-shape-rounded bg-white mt-n2 mb-n2 mr-n2"></div>
										<img src="/images/avatar_small.jpg" alt="" className="avatar-img rounded-circle shadow-light" />
									</div>
									<h1 className="mb-2 mb-lg-3">Amanda Malat</h1>
									<p className="lead mb-0">UI/UX Designer</p>
									<span className="cover-letter letter-xl text-white opacity-10">A</span>
								</div>
							</section>

						</div>
					</div>
				</div>

				<div className="page-content">

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

					<section id="skills" className="bg-light">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
									<div className="section-title h2 mb-3">
										<h2 className="mb-0">Skills</h2>
										<span className="title-letter">S</span>
									</div>
									<p>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus.</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 mb-4 mb-md-0">
									<p className="h6 mb-1">Social Media</p>
									<div className="progress mb-6 rounded-0" >
										<div className="progress-bar" role="progressbar" ></div>
									</div>
									<p className="h6 mb-1">Project Management</p>
									<div className="progress rounded-0" >
										<div className="progress-bar" role="progressbar" ></div>
									</div>
								</div>
								<div className="col-md-6">
									<p className="h6 mb-1">Analytical Knowledge</p>
									<div className="progress mb-6 rounded-0" >
										<div className="progress-bar" role="progressbar" ></div>
									</div>
									<p className="h6 mb-1">Creativity & Expression</p>
									<div className="progress rounded-0" >
										<div className="progress-bar" role="progressbar" ></div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id="experience" className="pb-0">
						<div className="container">
							<div className="section-title h2 text-center mb-8">
								<h2 className="mb-0">Experience</h2>
								<span className="title-letter">E</span>
							</div>

							<div className="row">
								<div className="col-lg-4 mb-1 mb-lg-0">
									<p className="h5 mb-0">Marketing Manager</p>
									<p className="opacity-75">West House Productions, 2015 - 2020</p>
								</div>
								<div className="col-lg-8">
									<p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus. Nulla at nisi tellus. Suspendisse potenti.</p>
								</div>
							</div>

							<hr/>

							<div className="row">
								<div className="col-lg-4 mb-1 mb-lg-0">
									<p className="h5 mb-0">Marketing Consultant</p>
									<p className="opacity-75">Jump High Marketing, 2012 - 2015</p>
								</div>
								<div className="col-lg-8">
									<p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus. Nulla at nisi tellus. Suspendisse potenti.</p>
								</div>
							</div>

							<hr/>

							<div className="row">
								<div className="col-lg-4 mb-1 mb-lg-0">
									<p className="h5 mb-0">Product Manager</p>
									<p className="opacity-75">Trident Prototyping Studios, 2007 - 2011</p>
								</div>
								<div className="col-lg-8">
									<p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus. Nulla at nisi tellus. Suspendisse potenti.</p>
								</div>
							</div>
						</div>
					</section>

					<section id="services" className="pb-0">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
									<div className="section-title h2 mb-3">
										<h2 className="mb-0">Services</h2>
										<span className="title-letter">S</span>
									</div>
									<p>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus.</p>
								</div>
							</div>
							<div className="row my-n2 mx-sm-n2">
								<div className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className="ti-timer"></i>
											</div>
										</div>
										<h3 className="h4 mb-2">Launch Quickly</h3>
										<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
									</div>
								</div>

								<div className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className="ti-brush-alt"></i>
											</div>
										</div>
										<h3 className="h4 mb-2">Stylish Design</h3>
										<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
									</div>
								</div>

								<div className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className="ti-book"></i>
											</div>
										</div>
										<h3 className="h4 mb-2">Well Documented</h3>
										<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
									</div>
								</div>

								<div className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className="ti-layers"></i>
											</div>
										</div>
										<h3 className="h4 mb-2">Multiple Styles</h3>
										<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
									</div>
								</div>

								<div className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className="ti-settings"></i>
											</div>
										</div>
										<h3 className="h4 mb-2">Fully Customizable</h3>
										<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
									</div>
								</div>

								<div className="col-md-6 col-xl-4 py-2 px-md-2">
									<div className="feature-block feature-boxed feature-decorated">
										<div className="feature-icon text-primary mb-3">
											<div>
												<i className="ti-headphone-alt"></i>
											</div>
										</div>
										<h3 className="h4 mb-2">Friendly Support</h3>
										<p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id="portfolio">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
									<div className="section-title h2 mb-3">
										<h2 className="mb-0">Portfolio</h2>
										<span className="title-letter">P</span>
									</div>
									<nav className="portfolio-filter isotope-filter">
										<ul className="justify-content-center">
											<li><a href="#" className="active" data-filter="*">All</a></li>
											<li><a href="#" data-filter=".web">Web</a></li>
											<li><a href="#" data-filter=".brand">Brand</a></li>
											<li><a href="#" data-filter=".design">Design</a></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="portfolio-container isotope-container row my-n2 mx-sm-n2">
								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-1.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details">
												<h4 className="h5">Love</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 brand">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-2.html">
											<div className="item-media">
												<img src="/images/portfolio/project-2.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details">
												<h4 className="h5">Beautiful Girl - Gallery</h4>
												<p className="font-italic">Brand</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-3.html">
											<div className="item-media">
												<img src="/images/portfolio/project-3.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Future City - Youtube Iframe</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 design">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-2.html">
											<div className="item-media">
												<img src="/images/portfolio/project-4.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Golden Gate Bridge</h4>
												<p className="font-italic">Design</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-9.jpg" alt="" />
												</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Beach</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-3.html">
											<div className="item-media">
												<img src="/images/portfolio/project-6.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Mountains</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-10.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Adventure</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-2.html">
											<div className="item-media">
												<img src="/images/portfolio/project-11.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Waterfall</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>

								<div className="isotope-item col-sm-6 col-lg-4 py-2 px-sm-2 web">
									<div className="portfolio-item details-inside">
										<a href="portfolio-single-1.html">
											<div className="item-media">
												<img src="/images/portfolio/project-5.jpg" alt="" />
											</div>
											<div className="item-overlay bg-dark"></div>
											<div className="item-details text-white">
												<h4 className="h5">Sea</h4>
												<p className="font-italic">Web</p>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section>
						<div className="overlay">
							<div className="overlay-inner bg-image-holder bg-cover bg-center">
								<img src="/images/image-5.jpg" alt="background" />
							</div>
							<div className="overlay-inner bg-dark opacity-70"></div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-11 col-xl-10 mx-lg-auto text-center text-white">
									<div className="slider dots-light dots-outside" data-slick='{"dots":true,"arrows":false}'>
										<div>
											<div className="icon icon-5x mb-8">
												<i className="fa fa-quote-right"></i>
											</div>
											<blockquote>
												<p className="mb-5">Nulla consequat nulla vitae enim venenatis, vel vulputate mi commodo. Pellentesque consequat at justo quis vulputate. Maecenas elementum metus eu maximus auctor. Morbi ultrices quam rhoncus purus bibendum ornare. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
												<footer className="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
																										<div className="avatar">
														<img src="/images/avatar_small.jpg" alt="" className="avatar-img rounded-circle shadow-dark" />
													</div>
													<div className="ml-5">
														<h4 className="h6 mb-0">Jessica Nelson</h4>
														<small className="d-block">Director Business Planning, Amazon</small>
													</div>
												</footer>
											</blockquote>
										</div>

										<div>
											<div className="icon icon-5x mb-8">
												<i className="fa fa-quote-right"></i>
											</div>
											<blockquote>
												<p className="mb-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												<footer className="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
																										<div className="avatar">
														<img src="/images/avatar_small.jpg" alt="" className="avatar-img rounded-circle shadow-dark" />
													</div>
													<div className="ml-5">
														<h4 className="h6 mb-0">Jessica Nelson</h4>
														<small className="d-block">Director Business Planning, Amazon</small>
													</div>
												</footer>
											</blockquote>
										</div>

										<div>
											<div className="icon icon-5x mb-8">
												<i className="fa fa-quote-right"></i>
											</div>
											<blockquote>
												<p className="mb-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												<footer className="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
																										<div className="avatar">
														<img src="/images/avatar_small.jpg" alt="" className="avatar-img rounded-circle shadow-dark" />
													</div>
													<div className="ml-5">
														<h4 className="h6 mb-0">Jessica Nelson</h4>
														<small className="d-block">Director Business Planning, Amazon</small>
													</div>
												</footer>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

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

					<section id="contact">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 mx-lg-auto">
									<div className="row mb-8">
										<div className="col-lg-8 mx-lg-auto text-center">
											<div className="section-title h2 mb-3">
												<h2 className="mb-0">Contact</h2>
												<span className="title-letter">C</span>
											</div>
											<p>Want to say hello? Want to know more about me? Give me a call or drop me an email and I will get back to you as soon as I can.</p>
										</div>
									</div>
									<div className="row mb-8">
										<div className="col-md-4 mb-5 mb-md-0">
											<div className="feature-block">
												<div className="feature-icon text-primary mb-4">
													<div className="mx-auto">
														<i className="ti-mobile"></i>
													</div>
												</div>
												<p className="text-center">(0091) 1111 1234567<br/>
												(084) 2222 1234567</p>
											</div>
										</div>

										<div className="col-md-4 mb-5 mb-md-0">
											<div className="feature-block">
												<div className="feature-icon text-primary mb-4">
													<div className="mx-auto">
														<i className="ti-location-pin"></i>
													</div>
												</div>
												<p className="text-center">69 Halsey St, New York, Ny 10002,<br/>
												United States</p>
											</div>
										</div>

										<div className="col-md-4">
											<div className="feature-block">
												<div className="feature-icon text-primary mb-4">
													<div className="mx-auto">
														<i className="ti-email"></i>
													</div>
												</div>
												<p className="text-center"><a href="mailto:support@example.com" className="text-dark">support@example.com</a><br/>
												<a href="mailto:hello@example.com" className="text-dark">hello@example.com</a></p>
											</div>
										</div>
									</div>
									<div className="contact-form">
										<form className="mb-0" id="cf" name="cf" action="include/sendemail.php" method="post" autoComplete="off">
											<div className="form-row">
												<div className="form-process"></div>

												<div className="col-12 col-md-6">
													<div className="form-group error-text-white">
														<input type="text" id="cf-name" name="cf-name" placeholder="Enter your name" className="form-control required" />
													</div>
												</div>

												<div className="col-12 col-md-6">
													<div className="form-group error-text-white">
														<input type="email" id="cf-email" name="cf-email" placeholder="Enter your email address" className="form-control required" />
													</div>
												</div>

												<div className="col-12">
													<div className="form-group error-text-white">
														<input type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" className="form-control" />
													</div>
												</div>

												<div className="col-12 mb-4">
													<div className="form-group error-text-white">
														<textarea name="cf-message" id="cf-message" placeholder="Here goes your message" className="form-control required" rows={7}></textarea>
													</div>
												</div>

												<div className="col-12 d-none">
													<input type="text" id="cf-botcheck" name="cf-botcheck" value="" className="form-control" />
												</div>

												<div className="col-12 text-center">
													<button className="btn btn-primary" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
												</div>
											</div>
										</form>
										<div className="contact-form-result text-center"></div>
									</div>
								</div>
							</div>
						</div>
					</section>

				
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
							<p className="text-center">© 2019 Malat - All Rights Reserved</p>
						</div>
					</footer>

				</div>
			</div>

		</div>
  )
}

export default IndexPage