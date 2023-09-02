import styled from 'styled-components'

export const SupporterStyle = styled.div`
.wrapper{
    box-shadow: 0px 4px 50px 0px #1F81B01A;
    padding:10px 50px 50px;
    border-radius:50px;
}
.scroll{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:100px;
    @media (max-width: 480px) {
        flex-direction:column;
    }
    

}
.imgBox{
    img{
        width:100%;
        height:100%;
    @media (max-width: 768px) {
          max-width: 100%;
        }
      }
}
.parallax {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
  }

`