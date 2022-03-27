import React, { useState } from 'react'
import sendMessage from '../../utils/sendMessage'

type Props = {}

function ContactForm({}: Props) {

    const [inputData, setInputData] = useState({ name: "", email: "", subject: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (evt:any) => {
        evt.preventDefault();
        
        setErrorMessage("");

        if( !inputData["name"] || inputData["name"].length === 0 ) {
            return setErrorMessage("Name is required!");
        }
        if( !inputData["email"] || inputData["email"].length === 0 ) {
            return setErrorMessage("Email is required!");
        }
        if( !inputData["message"] || inputData["message"].length === 0 ) {
            return setErrorMessage("Message is required!");
        }

        sendMessage(inputData).then(() => {
            setSent(true);
        });
    }

    const handleInput = (evt:any) => {
        evt.preventDefault();
        const { name, value } = evt.target;
        setInputData({
            ...inputData,
            [name] : value
        })
    }


const Sent = () => <div className="alert alert-success">Message sent successfully!</div>

  return sent ? <Sent /> : (<div className="contact-form">
  <form className="mb-0" id="cf" name="cf" method="post" autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-row">
          <div className="form-process"></div>

          <div className="col-12 col-md-6">
              <div className="form-group error-text-white">
                  <input required onChange={handleInput} type="text" id="cf-name" name="name" placeholder="Enter your name" className="form-control required" />
              </div>
          </div>

          <div className="col-12 col-md-6">
              <div className="form-group error-text-white">
                  <input required onChange={handleInput} type="email" id="cf-email" name="email" placeholder="Enter your email address" className="form-control required" />
              </div>
          </div>

          <div className="col-12">
              <div className="form-group error-text-white">
                  <input onChange={handleInput} type="text" id="cf-subject" name="subject" placeholder="Subject (Optional)" className="form-control" />
              </div>
          </div>

          <div className="col-12 mb-4">
              <div className="form-group error-text-white">
                  <textarea required onChange={handleInput} name="message" id="cf-message" placeholder="Here goes your message" className="form-control required" rows={7}></textarea>
              </div>
          </div>

          <div className="col-12 text-center">
              {errorMessage !== "" && <p className="alert alert-danger alert-md">{errorMessage}</p>}
              <button onClick={handleSubmit} className="btn btn-primary" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
          </div>
      </div>
  </form>
  <div className="contact-form-result text-center"></div>
</div>)
}

export default ContactForm