import React, {useEffect, useState} from 'react';
// import SongItem from './../Fragments/SongItem';
// import Songs from './../../Data/Songs';
import axios from 'axios';
import RecommendationItem from '../Elements/RecommendationItem';

const Recommendation = () => {
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seed_artists = '37i9dQZF1EIUXSCDe2WuJl';
        const seed_genres = 'emo,punk';
        const seed_tracks = '7j31rVgGX9Q2blT92VBEA0';
        const limit = 20;
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`https://api.spotify.com/v1/recommendations/?seed_artists=${seed_artists}&seed_genres=${seed_genres}&seed_tracks=${seed_tracks}&limit=${limit}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRecommendationList([...recommendationList, ...response.data.tracks]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-[#121212] rounded-lg p-3 flex flex-wrap gap-2'>
      {recommendationList.map((item) => (
        <RecommendationItem key={item.id} title={item.name} artists={item.artists[0].name} image={item.album.images[0].url} />
      ))}
    </div>
  );
};

export default Recommendation;
