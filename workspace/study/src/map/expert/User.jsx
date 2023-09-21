import React from 'react';


const user = ({user}) => {
  const {name, email, address, website, phone} = user;
  return (
<div>
  <div style={FlexStyle}>
    
      <div key={id} style={UserStyle}>
        <h2 style={h2Style}>{name}</h2>
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
  </div>
</div>
  );
    }


export default user;