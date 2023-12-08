import React from 'react';
import Form from './Form';


const App = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login logic goes here');
  };

  return (
    <div style={styles.container}>
      < Form onSubmit={handleLogin} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '0',
  },
};

export default App;