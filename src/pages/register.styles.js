import styled from "styled-components";

export const RegisterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rebeccapurple;
  border-radius: 10px;
  height: 450px;

  h1 {
    margin-top: 10px;
    text-align: left;

    color: #fff;
    font-family: "Jost";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  .register-form {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .input-register {
    width: 250px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 5px;
    border-radius: 10px;
    background-color: white;
    color: black;
  }

  .password-input {
    width: 250px;
    margin-bottom: 10px;
    padding: 10px 0px 10px 5px;
    border-radius: 10px;
    background-color: white;
    color: black;
  }

  .register-btn {
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: 2s;
    margin-bottom: 25px;

    &:hover {
      background-color: lightblue;
      color: black;
    }
  }

  .yes-account {
    color: whitesmoke;
    margin-right: 15px;
  }

  .Login-btn {
    color: whitesmoke;
    background-color: red;
    border-radius: 10px;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`;
