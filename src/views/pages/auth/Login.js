import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "../../../App.css";
import { Button } from "../../components/Button.js";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="">
      <div className="">
        <button
          onClick={() =>
            loginWithRedirect({
              appState: {
                returnTo: "/home",
              },
            })
          }
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
