import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme["red-500"]};
  }

  button {
    background: ${(props) => props.theme["yellow-500"]};
    height: 3rem;
    border-radius: 10px;
    border: 0;
    padding: 0 1rem;
    color: ${(props) => props.theme["gray-700"]};
    width: 100%;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme["yellow-700"]};
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  border: 2px solid ${(props) => props.theme["blue-800"]};
  padding: 0.5rem;
  border-radius: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }

  input {
    display: flex;
    width: 100%;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }
`;
