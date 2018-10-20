import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Container = styled.div`
    align-items: stretch;   
    box-sizing: border-box;
    display: flex;
    font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    flex-direction: column;
    justify-items: center;
    min-height: 100vh;
    padding: 1rem;
    width: 100%;
`;

export const FormGroup = styled.fieldset`
    border: 0;
    margin-bottom: 1rem;
    padding: 0;
`;

export const FormInput = styled.input`
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    box-sizing: border-box;
    padding: 0.5rem;
    font: inherit;
    width: 100%;
    
    &::-webkit-input-placeholder {
        color: #999;
    }
`;

export const FormSelect = styled.select`
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    box-sizing: border-box;
    padding: 0.5rem;
    height: 2.25rem;
    font: inherit;
    width: 100%;
`;

export const FormLabel = styled.label`
    display: none;
`;

export const Button = styled.button`
    background-color: #3490DC;
    border: 0;
    border-radius: 0.25rem;
    color: white;
    font: inherit;
    padding: 0.75rem 1rem;
    ${props => props.full && css`width: 100%;` }
    ${props => props.disabled && css`cursor: not-allowed;`  }
    ${props => props.disabled && css`opacity: 0.75;`  }
`;
