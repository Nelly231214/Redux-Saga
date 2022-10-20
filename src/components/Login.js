import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './login.css'
import { FaLock, FaAddressBook } from 'react-icons/fa';

export default function Login() {

  const [logValue, setLogValue] = useState('');
  const [passValue, setPassValue] = useState('');

  const logPass = {
    log: 'admin@gmail.com',
    pass: 'admin123'
  }


  const navigate = useNavigate();
  const navigateToMenu = (e) => {
    e.preventDefault();

    if (logPass.log === logValue && logPass.pass === passValue) {
      navigate('./Menu');
    } else {
      alert('kori')
    }
  };
  const LogChange = e => {
    setLogValue(e.target.value)
  }
  const PassChange = e => {
    setPassValue(e.target.value)
  }

  
  
  return (
    <>
      <section className='login-section'>
        <div className="wrapper">
          <div className="title"><h1>Sign in</h1></div>

          <div className="login-container">
            <div className="email">
              <label className="label">Email ID</label>
              <input
                type="text"
                className="input"
                placeholder="xyz@gmail.com"
                onChange={LogChange}
                value={logValue} />
              <FaAddressBook className='fas' />
            </div>

            <div className="password">
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="*********"
                onChange={PassChange}
                value={passValue} />
              <FaLock className='fas' />
            </div>

            <div className="login">
              <button onClick={navigateToMenu} className='btn'>Login</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
