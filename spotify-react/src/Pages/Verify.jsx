import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Verify = () => {
  useEffect(() => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/verify';

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    let codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier
    });

    const getToken = async () => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: body
        });

        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getToken();
  }, []);

  return (
    <div className='flex w-100 h-[100vh] text-white'>
      <div className='flex m-auto flex-col gap-10 bg-slate-800 px-8 py-6 rounded-md'>
        <h1 className='text-3xl'>Login Success✅ </h1>
        <Link className='flex px-3 py-2 bg-slate-600 mx-auto rounded-md' to='/'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Verify;
