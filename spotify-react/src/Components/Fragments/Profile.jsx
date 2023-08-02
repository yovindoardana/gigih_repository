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

  return (
    <div>
      <h1 className='text-white'>{userData.display_name}</h1>
      <img src={userData.images[1].url} alt='' />
      {/* {userData.images.map((image) => (
        <img key={image.url} src={image.url} alt='' />
      ))} */}
    </div>
  );
};

export default Profile;
