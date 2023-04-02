import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme["blue-800"]};
  margin-bottom: 1rem;
  strong {
    font-weight: 700;
    color: ${(props) => props.theme["blue-600"]};
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme["blue-800"]};
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
