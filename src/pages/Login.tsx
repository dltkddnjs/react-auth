import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 700px;
  border: 1px solid grey;
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  width: 90%;
  height: 90%;
  h1 {
    margin-bottom: 50px;
  }
`;

const InputBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  /* outline: none; */
  border: 1px solid grey;
  font-size: 16px;
  font-weight: 400;
  padding: 0 15px;
`;

const SigninButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #3339cd;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
  transition: background-color 0.3s;
  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(80%);
  }
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event: any) => {
    const emailValue = event.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailValue);
    setIsValid(isValidEmail);
    setEmail(emailValue);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`Email: ${email}`);
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <InputBox>
          Email
          <CustomInput
            type="email"
            placeholder="Example@gmail.com"
            onChange={handleEmailChange}
          />
        </InputBox>
        <InputBox>
          Password
          <CustomInput type="password" placeholder="Enter Your Password" />
        </InputBox>

        <SigninButton type="submit" disabled={!isValid}>
          Sign in
        </SigninButton>
      </Wrapper>
    </Container>
  );
};

export default Login;
