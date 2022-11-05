import React from 'react';
import '../../../App.css';
// import cloudVideo from "../../assets/videos/clouds.mp4";
import { Button } from '../../components/Button.js';

function Login() {
  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
}

export default Login;
