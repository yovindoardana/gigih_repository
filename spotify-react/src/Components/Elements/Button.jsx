import React from 'react';

const Button = (props) => {
  const {children} = props;

  return <button className='button'>{children}</button>;
};

export default Button;
