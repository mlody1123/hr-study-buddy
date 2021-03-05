import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
