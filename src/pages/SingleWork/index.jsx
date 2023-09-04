import React from 'react'
import { Container } from '../../global/component'
import { useParams } from 'react-router-dom'
import WorkData from '../../mock/workData';
import styled from 'styled-components';

const Style = styled.div`
h1{
  margin:20px auto;
  font-size: 2rem;
  font-weight: 600;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: center;
  color:${props=>props.theme.palette.singleWorkTitle};

}
img{
  width:100%;
  height:100%;
  border-radius:16px;
  margin-bottom:20px;
}
`
const SingleWork = () => {
  const { id } = useParams();
  const data = WorkData();
  const myData = data.find((item) => item.id === Number(id));
  return (
    <Style>
      <Container>
        <h1>{myData?.title}</h1>
        <img src={myData?.cover} alt="" />
        {myData?.img2 ? <img src={myData?.img2} alt="" /> : ""}
        {myData?.img3 ? <img src={myData?.img3} alt="" /> : ""}
        {myData?.img4 ? <img src={myData?.img4} alt="" /> : ""}
        {myData?.img5 ? <img src={myData?.img5} alt="" /> : ""}
        {myData?.img6 ? <img src={myData?.img6} alt="" /> : ""}
        {myData?.img7 ? <img src={myData?.img7} alt="" /> : ""}
        {myData?.img8 ? <img src={myData?.img8} alt="" /> : ""}
        {myData?.img9 ? <img src={myData?.img9} alt="" /> : ""}
      </Container>

    </Style>
  )
}

export default SingleWork