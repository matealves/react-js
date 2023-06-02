import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #333;
  padding: 15px;
  border-radius: 10px;
  color: #fff;

  span {
    font-weight: bold;
  }

  .link {
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

type ButtonProps = {
  cancel?: boolean;
  pay?: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.cancel ? "#9b111e" : props.pay ? props.pay : "#fff"};
  margin: 0 0 0 30px;
  border-radius: 3px;
  color: ${({ pay, cancel }) => (pay || cancel ? "#fff" : "#333")};
  font-weight: bold;

  @media (max-width: 600px) {
    margin: 15px 0 0 0;
  }
`;

type Button2Props = {
  primary?: boolean;
};

export const Button2 = styled.button<Button2Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fff;
  color: #fff;
  margin: 1.5em 1em 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #fff;
      color: #333;
    `}
`;
