import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 5rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1480px;
  margin: 6px auto;
  padding: 6px 0;
  /* background: ${(props) => props.theme.white}; */
  border-radius: 8px;
`;

export const DashBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 69rem;
  max-height: 47.5rem;
  border-radius: 0 8px 8px 0;
  background: ${(props) => props.theme.white};
  padding: 1rem;

  table {
    margin: 2rem;

    th {
      border-bottom: 2px solid #000;
      text-align: justify;
      font-weight: 400;
      padding-left: 0.5rem;
    }

    td {
      border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
      text-align: justify;
      padding-left: 0.5rem;
      height: 3rem;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        height: 100%;

        img {
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 50%;
        }
      }
      strong {
        display: flex;
        flex-direction: column;

        span {
          font-weight: 400;
          color: ${(props) => props.theme["gray-500"]};
        }
      }

      button {
        background: transparent;
        border: 0;
        svg {
          color: ${(props) => props.theme["orange-500"]};
        }
      }
    }
  }
`;
