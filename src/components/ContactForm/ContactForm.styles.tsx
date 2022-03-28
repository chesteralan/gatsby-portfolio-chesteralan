import styled from 'styled-components';


export const Form = styled.div`
    position: relative;

    & > form {
        padding: 10px;
    }
`

export const FormCover = styled.div`
    background-color:#CCC;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 1;
    opacity: 0.3;
`;