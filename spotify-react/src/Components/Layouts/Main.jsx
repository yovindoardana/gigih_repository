import React from 'react';
import Button from './../Elements/Button';
import GenerateRandomString from './../../Utils/GenerateRandomString';
import GenerateCodeChallenge from './../../Utils/GenerateCodeChallenge';
const Main = () => {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/callback';

    let codeVerifier = GenerateRandomString(128);

    GenerateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = GenerateRandomString(16);
      let scope = 'playlist-modify-private';

      localStorage.setItem('code_verifier', codeVerifier);

      let args = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
      });

      window.location = 'https://accounts.spotify.com/authorize?' + args;
    });
  };

  return (
    <main>
      <div className='container'>
        <div className='top-container'>
          <div className='arrows'>
            <i className='ri-arrow-left-s-line'></i>
            <i className='ri-arrow-right-s-line'></i>
          </div>
          <div className='auth-group'>
            <Button onClick={() => {}}>Sign Up</Button>
            <Button onClick={handleLogin}>Log In</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
