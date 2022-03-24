import React from 'react'

type Props = {}

function SkillsSection({}: Props) {
  return (
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
  )
}

export default SkillsSection