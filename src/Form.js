import React from 'react';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '200%',
    maxWidth: '400px',
    height: '500px',
    padding: '50px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Quicksand, sans-serif', 
  
    
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    marginBottom: '15px',
    height: '40px',
  },
  label: {
    margin: '5px 0',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    width: '100%',
  },
  button: {
    background: '#1877f2',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    marginTop: '10px',
    height: '50px'
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    height: '30px',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
    color: '#1877f2',
  },
  signup: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
    color: '#1877f2',
    marginTop: '40px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },
  dividerLine: {
    flex: 1,
    height: '2px',
    backgroundColor: '#ccc',
    margin: '0 10px',
  },
  dividerText: {
    color: '#ccc',
    backgroundColor: 'white',
    padding: '0 10px',
  },
  facebookButton: {
    background: '#374fa3',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  socialIcon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  googleButton: {
    background: 'white',
    color: 'black',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  googleIcon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
};

const Form = ({ onSubmit }) => {
  return (
    <div style={{ backgroundColor: '#ccccff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form style={styles.form} onSubmit={onSubmit}>
        <h2 style={styles.heading}>Login</h2>
        <label style={styles.label}>
          <input style={styles.input} type="text" name="email" placeholder="Email" />
        </label>
        <label style={styles.label}>
          <input style={styles.input} type="password" name="password" placeholder="Password" />
        </label>
        <label style={styles.forgotPassword}>
          <a href="#forgot-password" style={{ textDecoration: 'none', color: '#1877f2' }}>
            Forgot password?
          </a>
        </label>
        <button style={styles.button} type="submit">
          Login
        </button>
        <p style={styles.signup}>
          <span style={{ color: 'black' }}>Don't have an account?</span>
          <a href="#signup" style={{ textDecoration: 'none', color: '#1877f2' }}>
            {' '}
            Signup
          </a>
        </p>
        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}> Or </span>
          <div style={styles.dividerLine}></div>
        </div>
        <button style={styles.facebookButton}>
          
          <span style={styles.buttonText}>Login with Facebook</span>
        </button>
        <button style={styles.googleButton}>
          
          <span style={styles.buttonText}>Login with Google</span>
        </button>
        
      </form>
    </div>
    
  );
};



export default Form;