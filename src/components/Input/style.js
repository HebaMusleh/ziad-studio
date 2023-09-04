import styled from "styled-components";

export const Style = styled.div`
  label {
    color: ${props=>props.theme.palette.labelColor};
    font-size: 1rem;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
  }
  input {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 25px;
    background: ${props=>props.theme.palette.inputBG};
    border-radius: 8px;
    border: 1px solid ${props=>props.theme.palette.inputBG};
    padding: 15px;
    outline: none;
    font-size: 1rem;
    &:focus {
      border: 1px solid #1f81b0;
    }
  }
  textarea {
    width: 100%;
    margin-top: 20px;
    background: ${props=>props.theme.palette.inputBG};
    border-radius: 8px;
    border: 1px solid ${props=>props.theme.palette.inputBG};
    resize: none;
    outline: none;
    font-size: 1rem;
    padding:20px;
    &:focus {
      border: 1px solid #1f81b0;
    }
  }
`;
