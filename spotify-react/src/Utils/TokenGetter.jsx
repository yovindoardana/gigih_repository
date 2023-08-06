import React, {useEffect, useState} from 'react';

const TokenGetter = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const clientId = '0a48a347940e4a3da62315585d0399d5';
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
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getToken();
  }, []);

  const isiToken = localStorage.getItem('access_token');

  // return <>{children}</>;
  return <h1>{isiToken}</h1>;
};

export default TokenGetter;
