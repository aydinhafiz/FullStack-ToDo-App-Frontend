import styled from "styled-components";

export const SContent = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media only screen and (max-width: 425px) {
    align-items: center;
    margin-top: 50px;
  }

  h1 {
    margin-top: 1rem;
    text-align: center;

    color: #fff;
    font-family: "Jost";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  .top {
    margin-top: 1rem;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 10px;
  }

  .list {
    width: 430px;
  }

  input {
    border: none;
    outline: none;
    width: 400px;
    padding: 20px 15px;

    border-radius: 10px;
    background: #373f68;

    color: #f7f8fd;
    font-family: "Jost";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media only screen and (max-width: 425px) {
      margin-bottom: 15px;
    }
  }

  .add-button {
    background-color: #000;
    color: #fff;
    padding: 15px 30px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-left: 15px;
    background: #d73737;

    color: #f2f4fe;
    text-align: center;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media only screen and (max-width: 425px) {
      width: 100%;
      margin-bottom: 10px;
      margin-left: 0px;
    }
  }

  .add-button:hover {
    background: #e98888;
  }
`;

export const STodo = styled.div`
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 15px 30px;
  border-radius: 5px;

  margin-bottom: 15px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );

  &:hover {
    transition: 1s ease;
    padding: 20px 40px;
  }

  &:not(:hover) {
    transition: padding 1s ease;
  }

  .icons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    gap: 0.5rem;
  }

  .icon {
    cursor: pointer;
    font-size: 20px;
  }
`;
