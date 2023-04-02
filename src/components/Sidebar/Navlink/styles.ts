import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1rem;

  a {
    text-decoration: none;
  }

  p {
    margin-left: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme["blue-600"]};
  }

  svg {
    color: ${(props) => props.theme["blue-600"]};
  }
`;
