import Button from 'components/atoms/Button/Button';
import React from 'react';
import { AverageStyled, InfoStyled, Wrapper } from './UsersListItem.styles';

interface IProps {
  userData: {
    name: string;
    average: string;
    attendance?: string;
  };
}

const UsersListItem: React.FC<IProps> = ({
  userData: { name, average, attendance = '0%' },
}) => (
  <Wrapper>
    <AverageStyled value={average}>{average}</AverageStyled>
    <InfoStyled>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </InfoStyled>
    <Button />
  </Wrapper>
);

export default UsersListItem;
