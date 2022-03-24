import React from 'react'

type Props = {}

function TestimonialsSection({}: Props) {
  return (
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
  )
}

export default TestimonialsSection