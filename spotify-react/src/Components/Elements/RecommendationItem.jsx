import React from 'react';

const RecommendationItem = (props) => {
  const {album, artists, image} = props;
  return (
    <div className='p-3 flex flex-col bg-[#181818] rounded-lg'>
      <div className='w-32'>
        <img className='w-auto rounded-lg' src={image} alt='' />
      </div>
      <div className='p-3 text-white'>
        <h1>{album}</h1>
        <h3 className='text-sm font-light text-slate-500'>{artists}</h3>
      </div>
    </div>
  );
};

export default RecommendationItem;
