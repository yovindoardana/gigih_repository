import React from 'react';
import Aside from '../Components/Layouts/Aside';
import Try from '../Components/Elements/Try';
import Main from '../Components/Layouts/Main';

const Home = () => {
  return (
    <div className='flex'>
      <Aside />
      <Main />
    </div>
  );
};

export default Home;
