import React, { useState } from 'react';
import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signin({ onClose }) {
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [data, setData] = useState({ name: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.name && data.password) {
      try {
        const response = await fetch('http://localhost:4000/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);
        window.localStorage.setItem('user', responseData.user);
        window.localStorage.setItem('name', responseData.recruiterName);
        window.localStorage.setItem('token', responseData.token);
      } catch (error) {
        setErrorMessage('There was a problem with the request, please try again');
        console.log(error);
      }
    } else {
      setErrorMessage('Please fill in both fields.');
    }
  };

 

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    
        <div className='Sign_container'>
          <button id='close_button' onClick={onClose}>
            X
          </button>
          <p id='b1'>Login to SwipTory</p>
          <form>
            <p>
              Username
              <input type='text' name='name' value={data.name} onChange={handleChange} />
            </p>

            <div className='password-input-container'>
              <p>
                Password
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name='password'
                  className='password-input'
                  value={data.password}
                  onChange={handleChange}
                />
                <button
                  type='button'
                  id='togglePassword'
                  className='password-toggle-button'
                  onClick={handleTogglePassword}
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </button>
              </p>
            </div>

            {errorMessage && <p className='error-message'>{errorMessage}</p>}

            <button type='submit' id='Sig' onClick={handleSubmit}>
              Signin
            </button>
          </form>
        </div>
    
    </>
  );
}

export default Signin;
