import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import '../../../App.css';
import { Button } from '../../components/Button.js';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default LogoutButton;