import React from 'react';
import UnorderedList from '../Fragments/UnorderedList';
import Library from './../Fragments/Library';

const Aside = () => {
  return (
    <aside className='p-2 text-white font-semibold flex flex-col min-h-screen w-[25vw]'>
      <div className='text-3xl flex justify-center items-center bg-[#121212] px-16 py-4 rounded-lg text-center'>
        <img className='w-10' src='/spotify.svg' alt='' />
        <h1>Spotifuck</h1>
      </div>
      <nav className='my-2 py-10 bg-[#121212] rounded-lg px-4'>
        <UnorderedList />
      </nav>
      <Library />
    </aside>
  );
};

export default Aside;
