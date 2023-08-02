import React from 'react';

const Library = () => {
  return (
    <div className='bg-[#121212] p-5'>
      <div className='library-top'>
        <div className='flex justify-between'>
          <a className='flex' href=''>
            <i className='ri-stack-line text-[#a7a7a7] me-4'></i>Your Library
          </a>
          <i className='ri-add-line '></i>
        </div>
        <div className='library-tabs-container my-4'>
          <button className='px-4 py-2 rounded-lg text-white'>Playlist</button>
          <button className='px-4 py-2 rounded-lg text-white'>Artists</button>
          <button className='px-4 py-2 rounded-lg text-white'>Podcasts & Shows</button>
        </div>
      </div>
      <div className='library-content'>
        <div className='flex align-middle gap-3'>
          <div className='w-20 h-20'>
            <img className='w-auto rounded-lg' src='https://source.unsplash.com/random/900x700/?cover' alt='' />
          </div>
          <div className='library-item-info'>
            <p className='library-item-title'>Liked Songs</p>
            <p className='library-item-description'>Playlists • 6 Songs</p>
          </div>
        </div>
        <div className='flex align-middle gap-3'>
          <div className='w-20 h-20'>
            <img className='w-auto rounded-lg' src='https://source.unsplash.com/random/900x700/?cover' alt='' />
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
