import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 1rem;
  width: 100%;

  border: 2px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme["gray-800"]};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${(props) => props.theme["blue-400"]};
      border: 2px solid ${(props) => props.theme["blue-400"]};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  
  input {
    color: ${(props) => props.theme["gray-800"]};
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
