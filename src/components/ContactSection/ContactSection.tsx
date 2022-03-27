import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContactForm from '../ContactForm/ContactForm';

type Props = {}

const ContactSection = ({}: Props) => {

    const data = useStaticQuery(graphql`
	query {
		contentYaml(
			fields: {fileName: {eq: "page-sections-contacts"}, parentFolder: {eq: "content"}}
		) {
			section_title
			description
            phone_number
            address
            email_address
		}
	  }
	`);

	const { section_title, description, phone_number, address, email_address } = data.contentYaml;

  return (
    <section id="contact">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-lg-auto">
                <div className="row mb-8">
                    <div className="col-lg-8 mx-lg-auto text-center">
                        <div className="section-title h2 mb-3">
                            <h2 className="mb-0">{section_title}</h2>
                            <span className="title-letter">{section_title.charAt(0)}</span>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="row mb-8">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="feature-block">
                            <div className="feature-icon text-primary mb-4">
                                <div className="mx-auto">
                                    <i className="ti-mobile"></i>
                                </div>
                            </div>
                            <p className="text-center">{phone_number}</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="feature-block">
                            <div className="feature-icon text-primary mb-4">
                                <div className="mx-auto">
                                    <i className="ti-location-pin"></i>
                                </div>
                            </div>
                            <p className="text-center">{address}</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-block">
                            <div className="feature-icon text-primary mb-4">
                                <div className="mx-auto">
                                    <i className="ti-email"></i>
                                </div>
                            </div>
                            <p className="text-center"><a href={`mailto:${email_address}`} className="text-dark">{email_address}</a></p>
                        </div>
                    </div>
                </div>
                
                <ContactForm />
                
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactSection