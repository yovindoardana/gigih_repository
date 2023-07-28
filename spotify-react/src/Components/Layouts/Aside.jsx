import React from 'react';
import UnorderedList from '../Fragments/UnorderedList';

const Aside = () => {
  return (
    <aside>
      <div className='logo'>
        <img src='/spotify.svg' alt='' />
        <h1>Spotify</h1>
      </div>
      <nav>
        <UnorderedList />
      </nav>
    </aside>
  );
};

export default Aside;
