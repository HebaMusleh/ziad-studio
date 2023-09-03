import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  .wrapped {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
  }
`;
const VerticalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;
const Title = styled.div`
  color: white;
  font-size: 1rem;
`;
const H2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 68px;
  letter-spacing: 0em;
  color:${(props) => props.theme.palette.primarySecondSection};
`;
export { Wrapper, VerticalWrapper, Title, H2 };
