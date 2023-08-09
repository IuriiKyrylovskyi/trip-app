import React from "react";
import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";

const Login = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };
console.log(import.meta.env.VITE_FACEBOOK_ID);
  return (
    <>
      <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId={import.meta.env.VITE_FACEBOOK_ID}
        fields="name,email,picture"
        callback={responseFacebook}
      />

      <br />
      <br />

      <GoogleLogin
        clientId={import.meta.env.VITE_GOOGLE_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
};

export default Login;
