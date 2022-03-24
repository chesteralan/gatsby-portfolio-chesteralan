import React from 'react'
import BackToTopButton from '../BackToTopButton/BackToTopButton'
import GlobalCoverBg from '../GlobalCoverBg/GlobalCoverBg'
import SiteNav from '../SiteNav/SiteNav'

type Props = {}

function Header({}: Props) {
  return (<>

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
					
					<SiteNav />

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

			<BackToTopButton />

			<GlobalCoverBg />

  </> )
}

export default Header