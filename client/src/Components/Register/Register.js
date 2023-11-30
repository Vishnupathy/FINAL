import React, { useState } from 'react';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register({ onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({ name: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data.name || !data.password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
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

      window.localStorage.setItem('name', responseData.name);
      window.localStorage.setItem('token', responseData.token);
    } catch (error) {
      setErrorMessage('There was a problem with the request, please try again');
      console.error(error);
    }
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className='register_container'>
        <button id='closebutton' onClick={onClose}>
          X
        </button>
        <p id='a1'>Login to SwipTory</p>
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

          <button type='submit' onClick={handleSubmit} id='Reg'>
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
