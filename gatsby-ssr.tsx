import * as React from "react"
import type { GatsbySSR } from "gatsby"
export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return (
    <div>
      <h1>Hello World</h1>
      {element}
    </div>
  )
}

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <link key="bootstrap-css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />,
  <link key="google-fonts" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;family=Roboto:wght@300;400;500;700&amp;display=swap" rel="stylesheet" />,
  <link key="malat-css" rel="stylesheet" href="/css/malat.css" />,
  <link key="malat-utilities-css" rel="stylesheet" href="/css/utilities.css" />,

  <link rel="stylesheet" href="/assets/vendor/slick/slick.min.css" type="text/css"></link>,
  <link rel="stylesheet" href="/assets/vendor/vegas/vegas.min.css" type="text/css"></link>,
  <link rel="stylesheet" href="/assets/vendor/featherlight/featherlight.min.css" type="text/css"></link>,
  <link rel="stylesheet" href="/assets/vendor/featherlight/featherlight.gallery.min.css" type="text/css"></link>,
  <link rel="stylesheet" href="/assets/vendor/fontawesome/css/all.min.css" type="text/css"></link>,
  <link rel="stylesheet" href="/assets/vendor/themify-icons/css/themify-icons.css" type="text/css"></link>
]

const FooterComponents = [
<script src="assets/vendor/jquery/dist/jquery.min.js"></script>,
		<script src="assets/vendor/popper.js/dist/popper.min.js"></script>,
		<script src="assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>,
		<script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>,
		<script src="assets/vendor/jquery-validation/dist/jquery.validate.min.js"></script>,
		<script src="assets/vendor/jquery-form/dist/jquery.form.min.js"></script>,
		<script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>,
		<script src="assets/vendor/isotope/dist/isotope.pkgd.min.js"></script>,
		<script src="assets/vendor/featherlight/jquery.detect_swipe.js"></script>,
		<script src="assets/vendor/featherlight/featherlight.min.js"></script>,
		<script src="assets/vendor/featherlight/featherlight.gallery.min.js"></script>,
		<script src="assets/vendor/slick/slick.min.js"></script>,
		<script src="assets/vendor/vegas/vegas.min.js"></script>,
		<script src="assets/vendor/typed.js/typed.min.js"></script>,
		<script src="assets/vendor/granim.js/dist/granim.min.js"></script>,
    <script src="assets/js/main.js"></script>,
]

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents, setHtmlAttributes, setPostBodyComponents }) => {
  
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setPostBodyComponents(FooterComponents)

}