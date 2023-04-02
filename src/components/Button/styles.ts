import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme["yellow-500"]};
  height: 3.5rem;
  border-radius: 10px;
  border: 0;
  padding: 0 1rem;
  color: ${(props) => props.theme["gray-700"]};
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-700"]};
  }
`;
