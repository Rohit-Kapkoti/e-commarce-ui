import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../reponsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/young-beautiful-blonde-woman-jacket-blue-wall-with-mobile-phone-doing-online-shopping_496169-1447.jpg?w=1060&t=st=1673689735~exp=1673690335~hmac=363be9aa92910fab1ee999c650df8780b6f2227368a26c6735cf42578a65174b")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 29px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE A ACCOUNT</Title>
        <Form>
          <Input
            placeholder="Enter your Firstname"
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <Input placeholder="Enter your lastname" /> */}
          {/* <Input placeholder="Enter your username"  /> */}
          <Input
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input placeholder="Enter your Confirm Password" onChange={(e) => setPassword(e.target.value)} /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
