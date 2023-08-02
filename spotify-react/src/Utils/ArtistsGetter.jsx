import React, {useEffect} from 'react';

const ArtistsGetter = ({accessToken}) => {
  useEffect(() => {
    async function getArtists() {
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

    if (accessToken) {
      getArtists();
    }
  }, [accessToken]);

  return null; // This component doesn't render anything, it just performs the API call
};

export default ArtistsGetter;
