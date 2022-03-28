import React from "react";
import GlobalCoverBg from "../GlobalCoverBg/GlobalCoverBg";
import SiteNav from "../SiteNav/SiteNav";
import { useStaticQuery, graphql, Link } from "gatsby";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

type Props = {};

function Header({}: Props) {
  const data = useStaticQuery(graphql`
    query {
      contentYaml(
        fields: {
          fileName: { eq: "page-sections-cover" }
          parentFolder: { eq: "content" }
        }
      ) {
        display_name
      }
    }
  `);

  const { display_name } = data.contentYaml;

  return (
    <>
      <div id="top"></div>

      <a href="#home" className="mobile-logo mobile-logo-light">
        <div className="overlay">
          <div className="overlay-inner bg-dark opacity-50"></div>
        </div>
        <span>{display_name}</span>
      </a>

      <button
        type="button"
        id="navigation-toggle"
        className="nav-toggle nav-toggle-light"
      >
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
            <Link to="/" className="logo">
              <span>{display_name}</span>
              <span className="title-letter text-white opacity-15">
                {display_name.charAt(0)}
              </span>
            </Link>
          </div>

          <div className="nav-divider mb-8"></div>

          <SiteNav />

          <div className="nav-divider my-8"></div>

          <SocialMediaIcons />
        </div>
      </header>

      <div className="header-overlay">
        <div className="overlay-inner bg-dark opacity-80"></div>
      </div>

      <GlobalCoverBg />
    </>
  );
}

export default Header;
