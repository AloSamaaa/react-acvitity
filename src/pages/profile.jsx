import React, { useState } from 'react';

const Profile = () => {
  const [names] = useState('Nam do-san');
  const [email] = useState('Namdosan@example.com');
  const [bio] = useState('Founder of Samsan Tech.');

  return (
    <div className="container border ps-4 pt-3 shadow-lg" id="userinfo">
      <h1>Profile</h1>
      <p>Name: {names}</p>
      <p>Email: {email}</p>
      <h5 class="fw-bold">{bio}</h5>
    </div>
  );
};

export default Profile;