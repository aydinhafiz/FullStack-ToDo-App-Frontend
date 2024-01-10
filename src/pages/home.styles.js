import styled from "styled-components";

export const SContent = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media only screen and (max-width: 460px) {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
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
    margin-top: 10px;
    gap: 10px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;

    @media only screen and (max-width: 460px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 0px;
      margin-top: 10px;
      align-items: center;
      justify-content: center;
      width: 400px;
    }
  }

  .list {
    width: 400px;
  }

  input {
    border: none;
    outline: none;
    width: 400px;

    border-radius: 10px;
    background: #373f68;

    padding: 20px 30px;

    color: #f7f8fd;
    font-family: "Jost";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media only screen and (max-width: 460px) {
      margin-bottom: 15px;
      width: 340px;
    }
  }

  .add-button {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 10px;

    background: #d73737;
    padding: 20px 30px;

    color: #f2f4fe;
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media only screen and (max-width: 460px) {
      width: 100%;
      margin-bottom: 10px;
      margin-left: 0px;
    }
  }

  .add-button:hover {
    background: #e98888;
  }
`;

export const STodos = styled.div`
  @media only screen and (max-width: 460px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const STodo = styled.div`
  padding: 20px 30px;

  position: relative;
  background-color: #000;
  color: #fff;
  border-radius: 10px;

  margin-bottom: 15px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );

  @media only screen and (max-width: 460px) {
    width: 400px;
  }

  .icons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    gap: 5px;
  }

  .icon {
    cursor: pointer;
    font-size: 20px;
  }
`;
