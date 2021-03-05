import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const AverageStyled = styled.div<{ value: string }>`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background-color: ${({ theme, value }) => {
    if (+value > 4) return theme.colors.success;
    if (+value > 3) return theme.colors.warning;
    if (+value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const InfoStyled = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  p:first-child {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
