import React, {useEffect, useState} from 'react';

const Callback = () => {
  const {dataProfile, setDataProfile} = useState();
  useEffect(() => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/callback';

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
        // getProfile(data.access_token);
        getArtists(data.access_token);
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
      await setDataProfile(data);
      console.log('User Profile:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function getArtists(accessToken) {
    try {
      const response = await fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      const data = await response.json();
      console.log('Artists:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

export default Callback;
