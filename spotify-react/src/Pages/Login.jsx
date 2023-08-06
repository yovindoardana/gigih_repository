import React from 'react';
import GenerateCodeChallenge from '../Utils/GenerateCodeChallenge';
import GenerateRandomString from '../Utils/GenerateRandomString';

const Login = () => {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/verify';

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
    <div className='w-100 h-[100vh] flex text-white'>
      <div className='flex flex-col m-auto bg-slate-800 py-3 px-5 rounded-lg gap-10'>
        <div className='flex align-middle my-4'>
          <img className='w-14' src='/spotify.svg' alt='' />
          <h1 className='text-3xl my-auto'>Spotifuck</h1>
        </div>
        <button className='bg-slate-400 px-4 py-2 rounded-lg mx-auto my-4' onClick={handleLogin}>
          Login with Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
