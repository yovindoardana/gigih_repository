import React from 'react';
import GenerateCodeChallenge from '../Utils/GenerateCodeChallenge';
import GenerateRandomString from '../Utils/GenerateRandomString';

const LoginWithSpotify = () => {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/callback';

    let codeVerifier = GenerateRandomString(128);

    GenerateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = GenerateRandomString(16);
      let scope = 'playlist-modify-private, user-top-read';

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
    <button className='px-4 py-2 rounded-lg text-white' onClick={handleLogin}>
      Login with Spotify
    </button>
  );
};

export default LoginWithSpotify;
