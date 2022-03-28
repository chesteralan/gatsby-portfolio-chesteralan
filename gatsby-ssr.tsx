import * as React from "react";
import type { GatsbySSR } from "gatsby";
export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return (
    <div>
      <h1>Hello World</h1>
      {element}
    </div>
  );
};

const HtmlAttributes = {
  lang: "en",
};

const HeadComponents = [
  <link
    key="bootstrap-css"
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/css/bootstrap.min.css"
  />,
  <link
    key="google-fonts"
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;family=Roboto:wght@300;400;500;700&amp;display=swap"
    rel="stylesheet"
  />,
  <link key="malat-css" rel="stylesheet" href="/css/style.css" />,
  <link key="utilities-css" rel="stylesheet" href="/css/utilities.css" />,
  <link key="custom-css" rel="stylesheet" href="/css/custom.css" />,

  <link
    key="lib-css-slick"
    rel="stylesheet"
    href="/vendor/slick/slick.min.css"
    type="text/css"
  ></link>,
  <link
    key="lib-css-vegas"
    rel="stylesheet"
    href="/vendor/vegas/vegas.min.css"
    type="text/css"
  ></link>,
  <link
    key="lib-css-featherlight"
    rel="stylesheet"
    href="/vendor/featherlight/featherlight.min.css"
    type="text/css"
  ></link>,
  <link
    key="lib-css-featherlight-gallery"
    rel="stylesheet"
    href="/vendor/featherlight/featherlight.gallery.min.css"
    type="text/css"
  ></link>,
  <link
    key="lib-css-fontawesome"
    rel="stylesheet"
    href="/vendor/fontawesome/css/all.min.css"
    type="text/css"
  ></link>,
  <link
    key="lib-css-themify"
    rel="stylesheet"
    href="/vendor/themify-icons/css/themify-icons.css"
    type="text/css"
  ></link>,
];

const FooterComponents = [
  <script
    key="lib-js-jquery"
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
  ></script>,
  <script
    key="lib-js-jquery"
    src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/js/bootstrap.min.js"
  ></script>,
  <script
    key="lib-js-popperjs"
    src="/vendor/popper.js/dist/popper.min.js"
  ></script>,
  <script
    key="lib-js-jquery-easing"
    src="/vendor/jquery.easing/jquery.easing.min.js"
  ></script>,
  <script
    key="lib-js-jquery-validation"
    src="/vendor/jquery-validation/dist/jquery.validate.min.js"
  ></script>,
  <script
    key="lib-js-jquery-form"
    src="/vendor/jquery-form/dist/jquery.form.min.js"
  ></script>,
  <script
    key="lib-js-imagesloaded"
    src="/vendor/imagesloaded/imagesloaded.pkgd.min.js"
  ></script>,
  <script
    key="lib-js-isotope"
    src="/vendor/isotope/dist/isotope.pkgd.min.js"
  ></script>,
  <script
    key="lib-js-detect_swipe"
    src="/vendor/featherlight/jquery.detect_swipe.js"
  ></script>,
  <script
    key="lib-js-featherlight"
    src="/vendor/featherlight/featherlight.min.js"
  ></script>,
  <script
    key="lib-js-featherlight-gallery"
    src="/vendor/featherlight/featherlight.gallery.min.js"
  ></script>,
  <script key="lib-js-slick" src="/vendor/slick/slick.min.js"></script>,
  <script key="lib-js-vegas" src="/vendor/vegas/vegas.min.js"></script>,
  <script key="lib-js-typedjs" src="/vendor/typed.js/typed.min.js"></script>,
  <script
    key="lib-js-granimjs"
    src="/vendor/granim.js/dist/granim.min.js"
  ></script>,
  <script key="lib-js-main" src="/js/main.js"></script>,
];

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
  setHtmlAttributes,
  setPostBodyComponents,
}) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  // setPostBodyComponents(FooterComponents)
};
