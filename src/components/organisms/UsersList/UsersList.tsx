import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ListStyled, Wrapper } from './UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <ListStyled>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ListStyled>
    </Wrapper>
  );
};

export default UsersList;
