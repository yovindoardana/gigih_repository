import React, {useEffect, useState} from 'react';
import TokenGetter from './../Utils/TokenGetter.jsx';
import ProfileGetter from './../Utils/ProfileGetter.jsx';
import ArtistsGetter from './../Utils/ArtistsGetter.jsx';

const Callback = () => {
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

  return (
    <div>
      <h1>Callback Component</h1>
      <TokenGetter />
      {/* <ProfileGetter /> */}
      {/* <ArtistsGetter /> */}
      {/* </TokenGetter> */}
    </div>
  );
};

export default Callback;