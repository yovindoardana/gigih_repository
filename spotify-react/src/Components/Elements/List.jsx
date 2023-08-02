import React from 'react';

const List = (props) => {
  const {title, icon, href = '#'} = props;
  return (
    <li className='py-1 px-4 rounded-lg text-[#a7a7a7] hover:text-white'>
      <a className='flex gap-2' href={href}>
        <i className={icon}></i>
        {title}
      </a>
    </li>
  );
};

export default List;
