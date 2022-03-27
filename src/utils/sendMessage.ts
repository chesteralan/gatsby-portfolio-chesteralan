import axios from 'axios';

type Props = {
    name: string,
    email: string,
    subject?: string,
    message: string,
}

const sendMessage = async (props: Props) => {
    
    const result = await axios.post(`/.netlify/functions/contact`,
          {
            name: props.name,
            email: props.email,
            subject: props.subject,
            message: props.message,
          }
        );
    
        return result;
}

export default sendMessage