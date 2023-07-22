import styled from "styled-components"
const Container = styled.div`
    height: 30px;
    background-color: #09c4c4;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    `

const Announcement = () => {
  return (
    <Container>
        big deal! free shipping for you
    </Container>
  )
}

export default Announcement