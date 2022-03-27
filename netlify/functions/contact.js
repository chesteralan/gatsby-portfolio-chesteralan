require('dotenv').config()

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const {name, email, subject, message} = body;
  
  const SibApiV3Sdk = require('sib-api-v3-sdk');
  let defaultClient = SibApiV3Sdk.ApiClient.instance;

  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

  let apiInstance = new SibApiV3Sdk.ContactsApi();

  let createContact = new SibApiV3Sdk.CreateDoiContact();

  createContact.email = email;
  createContact.templateId = process.env.SENDINBLUE_DOI_TEMPLATE_ID;
  createContact.redirectionUrl = process.env.SENDINBLUE_DOI_REDIRECTION_URL;
  createContact.includeListIds = [process.env.SENDINBLUE_LIST_ID || 2]
  createContact.attributes = { 
    NAME: name,
    SUBJECT: subject,
    MESSAGE: message
  }

  try {
    return apiInstance.createContact(createContact).then(function(data) {
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    }, function(error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message
        })
      }
    });
    
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

};