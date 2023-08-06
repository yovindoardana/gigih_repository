import React from 'react';
import Recommendation from '../Fragments/Recommendation';
import Profile from '../Fragments/Profile';

const Main = () => {
  return (
    <main className='p-2 w-[75%] flex flex-col gap-5'>
      <div className='bg-[#121212] rounded-lg py-3'>
        <div className='flex justify-between align-middle'>
          <div className='flex gap-4'>
            <div className='flex align-middle'>
              <i className='ri-arrow-left-s-line text-slate-400 m-auto text-4xl'></i>
              <i className='ri-arrow-right-s-line text-slate-400 m-auto text-4xl'></i>
            </div>
            <div className='search m-auto'>
              <input className='rounded-xl px-3' type='text' placeholder='Search' />
            </div>
          </div>
          <div className='auth-group'>
            <a href='#'>
              <button className='px-4 py-2 rounded-lg text-white'>Sign Up</button>
            </a>
            <a href={`/loginWithSpotify`}>
              <button className='px-4 py-2 rounded-lg text-white'>Login</button>
            </a>
          </div>
        </div>
      </div>
      {/* <Profile /> */}
      <Recommendation />
    </main>
  );
};

export default Main;
