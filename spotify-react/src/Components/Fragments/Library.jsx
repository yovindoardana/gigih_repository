import React from 'react';
import Button from '../Elements/Button';

const Library = () => {
  return (
    <div className='library'>
      <div className='library-top'>
        <div className='library-title-container'>
          <a className='library-title' href=''>
            <i className='ri-stack-line library-icon'></i>Your Library
          </a>
          <i className='ri-add-line '></i>
        </div>
        <div className='library-tabs-container'>
          <Button>Playlists</Button>
          <Button>Artists</Button>
          <Button>Podcasts & Shows</Button>
        </div>
      </div>
      <div className='library-content'>
        <div className='library-item'>
          <div className='library-item-img'>
            <img src='https://source.unsplash.com/random/900x700/?cover' alt='' />
          </div>
          <div className='library-item-info'>
            <p className='library-item-title'>Liked Songs</p>
            <p className='library-item-description'>Playlists • 6 Songs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
