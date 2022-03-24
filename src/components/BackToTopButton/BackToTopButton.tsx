import React from 'react'

type Props = {}

function BackToTopButton({}: Props) {
  return (
    <button type="button" id="backtotop" className="btn btn-primary btn-icon">
				<span className="btn-icon-inner fas fa-angle-up"></span>
			</button>
  )
}

export default BackToTopButton