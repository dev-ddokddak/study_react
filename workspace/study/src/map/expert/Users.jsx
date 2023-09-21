import React from 'react';

const Users = ({users}) => {
  return (
    users.map((user)=> <user key={user.id} user={user} />)
  );
};

export default Users;