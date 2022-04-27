import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 264px;

  div {
    p {
      font-size: 14px;
      margin-bottom: 13px;
      margin-top: 10px;
    }
    span {
      color: var(--negative);
    }
  }
  @media (min-width: 900px) {
    width: 329px;
  }
`;
export const InputContainer = styled.section`
  background-color: var(--grey-2);
  width: 329.93px;
  height: 48px;
  border: 1px solid #f8f9fa;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
  align-items: center;
  margin-bottom: 10px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}
  input {
    background: transparent;
    width: 200px;
    border: 0;
    color: var(--grey-0);
    font-size: 16.24px;
  }

  svg {
    width: 15px;
    height: 17px;
  }
`;
