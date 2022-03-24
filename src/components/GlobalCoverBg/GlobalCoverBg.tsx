import React from 'react'
import styled from 'styled-components';

type Props = {}

const GlobalBg = styled.div`
    background-image: url(/images/image-1.jpeg);
`;

function GlobalCoverBg({}: Props) {
  return (
    <div className="global-cover-bg">
				<GlobalBg className="overlay-inner bg-cover">
					<img src="/images/image-1.jpeg" alt="background" />
				</GlobalBg>
			</div>
  )
}

export default GlobalCoverBg