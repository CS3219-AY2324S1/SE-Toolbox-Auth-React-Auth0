import React from 'react';
import Profile from './Profile';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ margin: '20px' }}> {/* Add margin for separation */}
        <Profile />
      </div>
    </div>
  );
}

export default App;
