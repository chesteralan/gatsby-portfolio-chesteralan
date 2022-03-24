import React from 'react'

type Props = {}

function PageCover({}: Props) {
  return (
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
  )
}

export default PageCover