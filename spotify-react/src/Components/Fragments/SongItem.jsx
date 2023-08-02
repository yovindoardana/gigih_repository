import React from 'react';

const SongItem = (props) => {
  const {title, artists, image = 'https://source.unsplash.com/random/900x700/?cover'} = props;
  return (
    <div className='p-3 flex flex-col bg-[#181818] rounded-lg'>
      <div className='w-32'>
        <img className='w-auto rounded-lg' src={image} alt='' />
      </div>
      <div className='p-3 text-white'>
        <h1>{title}</h1>
        <h3 className='text-sm font-light text-slate-500'>{artists}</h3>
      </div>
    </div>
  );
};

export default SongItem;
