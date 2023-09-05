import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  .wrapped {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
  }
  .vertical-timeline-element-date{
    color:${props=>props.theme.palette.step};
  }
  .myComponent {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 0;
    padding: 1.25rem 0.375rem;
    @media (min-width: 640px) {
      padding: 4rem 1rem;
    }
  }
  .vertical-timeline-element {
    direction: ltr;
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
  @media (max-width: 768px) {
    font-size: .8rem;
  }
`;
const H2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 68px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.palette.primarySecondSection};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export { Wrapper, VerticalWrapper, Title, H2 };
