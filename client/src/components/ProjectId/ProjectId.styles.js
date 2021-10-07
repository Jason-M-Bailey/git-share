import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 75px;
`;

export const Hover = styled.div`
  :hover {
    transform: scale(1.01);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;

