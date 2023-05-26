import styled from "styled-components";

export const Spinner = styled.div`
  width: 91px; //4.8vw;
  height: 91px;
  border: 11.5px solid ${({ theme }) => theme.colors.snuff};
  border-top-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-self: center;
    width: 11vw;
    height: 11vw;
    border-width: 1.4vw;
  }
`;
