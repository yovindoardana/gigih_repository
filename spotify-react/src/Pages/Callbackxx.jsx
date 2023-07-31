import React from 'react';
import {Buffer} from 'buffer';

const Callback = () => {
  // const queryParams = new URLSearchParams(window.location.search);
  // const code = queryParams.get('code');
  // const redirectUri = 'http://localhost:5173/callback';
  // const clientId = '0a48a347940e4a3da62315585d0399d5';
  // const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  // console.log(code);

  // const credentials = clientId + ':' + clientSecret;
  // const encodedCredentials = Buffer.from(credentials).toString('base64');

  // const url = 'https://accounts.spotify.com/api/token';
  // const handleContinue = async () => {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Authorization: 'Basic ' + encodedCredentials
  //     },
  //     body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };
  return (
    <div>
      {/* Sukses Login <button onClick={handleContinue}>CONTINUE</button> */}
      Sukses Login
    </div>
  );
};

export default Callback;
