import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

const Callback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    const clientId = '0a48a347940e4a3da62315585d0399d5';
    const redirectUri = 'http://localhost:5173/callback';

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
        getProfile(data.access_token); // Fetch user profile after getting the access token
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getToken();
  }, []);

  async function getProfile(accessToken) {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      const data = await response.json();
      console.log('User Profile:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  <Navigate to='/dashboard' replace={true} />;
};

export default Callback;
