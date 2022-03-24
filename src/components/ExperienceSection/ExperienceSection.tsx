import React from 'react'

type Props = {}

function ExperienceSection({}: Props) {
  return (
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
  )
}

export default ExperienceSection