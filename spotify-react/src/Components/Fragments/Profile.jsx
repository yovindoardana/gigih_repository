import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    display_name: '',
    images: [],
    id: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const {display_name, images, id} = response.data;
        setUserData({display_name, images, id});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData.display_name) {
    return null;
  }

  return (
    <div className='flex align-middle gap-4 px-10'>
      <img className='rounded-full' src={userData.images[0].url} alt='' />
      <h1 className='text-white my-auto'>{userData.display_name}</h1>
    </div>
  );
};

export default Profile;
