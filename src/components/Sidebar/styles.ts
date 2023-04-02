import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 100%;
  max-height: 47.5rem;
  min-height: 720px;
  border-radius: 8px 0 0 8px;
  background: ${(props) => props.theme["blue-200"]};
`;

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  padding: 2rem;
  height: 100%;
  img {
    margin-bottom: 1.5rem;
  }

  div {
    width: 100%;
  }
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;

  img {
    width: 3 rem;
    height: 3rem;
    border-radius: 50%;
  }
`;
