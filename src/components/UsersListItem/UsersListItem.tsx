import React from 'react';

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
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

export default UsersListItem;
