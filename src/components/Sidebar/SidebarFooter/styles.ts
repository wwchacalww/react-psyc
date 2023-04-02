import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  strong {
    font-weight: 500;
    color: ${(props) => props.theme["blue-600"]};

    span {
      font-size: 12px;
      font-weight: 400;
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;

export const Menu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${(props) => (props.open ? "100px" : "0")};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 2rem;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme["gray-500"]};
    svg {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;
