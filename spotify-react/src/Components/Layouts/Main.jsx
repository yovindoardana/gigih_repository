import React from 'react';
import Button from './../Elements/Button';

const Main = () => {
  return (
    <main>
      <div className='container'>
        <div className='top-container'>
          <div className='arrows'>
            <i className='ri-arrow-left-s-line'></i>
            <i className='ri-arrow-right-s-line'></i>
          </div>
          <div className='auth-group'>
            <Button>Sign Up</Button>
            <Button>Log In</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
