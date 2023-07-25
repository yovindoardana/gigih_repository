import React from 'react';

const Home = () => {
  return (
    <div className='flex'>
      <aside>
        <div className='logo'>
          <img src='/spotify.svg' alt='' />
          <h1>Spotify</h1>
        </div>
        <nav>
          <ul>
            <li className='active'>
              <a href=''>
                <i class='ri-home-line'></i>
                Home
              </a>
            </li>
            <li className=''>
              <a href=''>
                <i class='ri-search-line'></i>
                Search
              </a>
            </li>
            <li className=''>
              <a href=''>
                <i class='ri-stack-line'></i>
                Your Library
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main></main>
    </div>
  );
};

export default Home;
