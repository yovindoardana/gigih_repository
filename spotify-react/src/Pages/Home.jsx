import React, {useEffect, useState} from 'react';
import Aside from '../Components/Layouts/Aside';
import Main from '../Components/Layouts/Main';

const Home = () => {
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

  useEffect(() => {
    window.location = 'http://localhost:5173/';
  }, []);

  return (
    <div className='flex'>
      <Aside />
      <Main />
    </div>
  );
};

export default Home;
