import styled, { keyframes } from "styled-components";

import signInBg from "../../assets/imgs/bg-login.jpg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 43.75rem;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(50rem);
  }
`;

export const AnimeContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;

    h1 {
      color: ${(props) => props.theme.white};
      margin-bottom: 1.5rem;
    }

    a {
      color: ${(props) => props.theme.white};
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #e3dcd7;
      }
    }

    span {
      display: block;
      color: ${(props) => props.theme.white};
      margin-top: 1.5rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBg}) no-repeat center;
  background-size: cover;
`;
