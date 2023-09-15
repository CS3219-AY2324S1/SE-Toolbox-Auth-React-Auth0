import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <div style={styles.container}>
      <img src={user.picture} alt={user.name} style={styles.image} />
      <p style={styles.text}>Name: {user.name}</p>
      <p style={styles.text}>Username: {user.nickname}</p>
      <p style={styles.text}>Email: {user.email}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  text: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    marginBottom: '10px',
  },
};

export default Profile;
