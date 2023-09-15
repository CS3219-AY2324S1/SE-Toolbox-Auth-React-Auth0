import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Auth0 React Sample App</h1>
      {isAuthenticated ? (
        <button
          onClick={() => logout()}
          style={logoutButtonStyle}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => loginWithPopup()}
          style={loginButtonStyle}
        >
          Log In
        </button>
      )}
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
};

const loginButtonStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#32a852',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const logoutButtonStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

export default Navbar;
