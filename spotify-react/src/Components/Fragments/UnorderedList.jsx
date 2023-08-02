import React from 'react';
import List from '../Elements/List';

const UnorderedList = () => {
  return (
    <ul className='flex flex-col gap-1'>
      <List title='Home' icon='ri-home-line' href='#' />
      <List title='Search' icon='ri-search-line' href='#' />
    </ul>
  );
};

export default UnorderedList;
