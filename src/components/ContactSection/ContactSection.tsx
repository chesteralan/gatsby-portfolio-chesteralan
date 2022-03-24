import React from 'react'

type Props = {}

const ContactSection = ({}: Props) => {
  return (
    <section id="contact">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-lg-auto">
                <div className="row mb-8">
                    <div className="col-lg-8 mx-lg-auto text-center">
                        <div className="section-title h2 mb-3">
                            <h2 className="mb-0">Contact</h2>
                            <span className="title-letter">C</span>
                        </div>
                        <p>Want to say hello? Want to know more about me? Give me a call or drop me an email and I will get back to you as soon as I can.</p>
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
                            <p className="text-center">(0091) 1111 1234567<br/>
                            (084) 2222 1234567</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="feature-block">
                            <div className="feature-icon text-primary mb-4">
                                <div className="mx-auto">
                                    <i className="ti-location-pin"></i>
                                </div>
                            </div>
                            <p className="text-center">69 Halsey St, New York, Ny 10002,<br/>
                            United States</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-block">
                            <div className="feature-icon text-primary mb-4">
                                <div className="mx-auto">
                                    <i className="ti-email"></i>
                                </div>
                            </div>
                            <p className="text-center"><a href="mailto:support@example.com" className="text-dark">support@example.com</a><br/>
                            <a href="mailto:hello@example.com" className="text-dark">hello@example.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form className="mb-0" id="cf" name="cf" action="include/sendemail.php" method="post" autoComplete="off">
                        <div className="form-row">
                            <div className="form-process"></div>

                            <div className="col-12 col-md-6">
                                <div className="form-group error-text-white">
                                    <input type="text" id="cf-name" name="cf-name" placeholder="Enter your name" className="form-control required" />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="form-group error-text-white">
                                    <input type="email" id="cf-email" name="cf-email" placeholder="Enter your email address" className="form-control required" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group error-text-white">
                                    <input type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" className="form-control" />
                                </div>
                            </div>

                            <div className="col-12 mb-4">
                                <div className="form-group error-text-white">
                                    <textarea name="cf-message" id="cf-message" placeholder="Here goes your message" className="form-control required" rows={7}></textarea>
                                </div>
                            </div>

                            <div className="col-12 d-none">
                                <input type="text" id="cf-botcheck" name="cf-botcheck" defaultValue="" className="form-control" />
                            </div>

                            <div className="col-12 text-center">
                                <button className="btn btn-primary" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                    <div className="contact-form-result text-center"></div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactSection