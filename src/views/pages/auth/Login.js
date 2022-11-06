import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import CustomButton from "../../components/CustomButton.js";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="my-5">
      <CustomButton
        onClick={() =>
          loginWithRedirect({
            appState: {
              returnTo: "/home",
            },
          })
        }
        label="Log In"
      />
    </div>
  );
};

export default LoginButton;
