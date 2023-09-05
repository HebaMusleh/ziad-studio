import styled from "styled-components";

const Mobile = styled.div`
    display: none;
    @media (max-width:920px) {
            display: ${props => props.display ? props.display : "block"};
    }
`

export default Mobile;