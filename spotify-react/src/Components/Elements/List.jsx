import React from 'react';

const List = (props) => {
  const {isActive = '', title, icon, href = '#'} = props;
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={href}>
        <i className={icon}></i>
        {title}
      </a>
      {/* <li className={isActive ? 'active' : ''}>
          <a href=''>
            <i className='ri-home-line'></i>
            {title}
          </a>
        </li> */}
      {/* <li className=''>
          <a href=''>
            <i className='ri-search-line'></i>
            Search
          </a>
        </li>
        <li className=''>
          <a href=''>
            <i className='ri-stack-line'></i>
            Your Library
          </a>
        </li> */}
    </li>
  );
};

export default List;
