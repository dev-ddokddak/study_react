// https://jsonplaceholder.typicode.com/users
import React from 'react';
import { useAsync } from 'react-async';
// import Users from './Users';

async function getUsers(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

const UserContainer = () => {
  console.log(useAsync({promiseFn: getUsers}));
  const {value: users, isResolved} = useAsync({promiseFn: getUsers});
  // if(isResolved) {console.log(value);}
  const FlexStyle = { padding: '10px', display:'flex', flexWrap: 'wrap'}
  const UserStyle = {
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '280px',
    
  }
  const h2Style ={ marginBottom: '10px' }
  const AddressStyle ={paddingLeft: '20px'}
  
  // return <Users Users={Users} />;

  return (
<div>
  <div style={FlexStyle}>
    {isResolved && users.map(({ id, name, email, phone, address, website }) => (
      <div key={id} style={UserStyle}>
        <h2 style={h2Style}>{name}</h2>
        <hr></hr>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
        <div>
          <strong>Address:</strong>
          <div style={AddressStyle}>
            {address.street}<br />
            {address.suite}<br />
            {address.city}<br />
            {address.zipcode}
          </div>
        </div>
        <div>
          <strong>Website:</strong> {website}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default UserContainer;