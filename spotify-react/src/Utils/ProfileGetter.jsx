import React, {useEffect, useState} from 'react';

const ProfileGetter = (props) => {
  const {accessToken} = props;
  const [dataProfile, setDataProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
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
        setDataProfile(data);
        console.log('User Profile:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    if (accessToken) {
      getProfile();
    }
  }, [accessToken]);

  return null; // This component doesn't render anything, it just performs the API call
};

export default ProfileGetter;
