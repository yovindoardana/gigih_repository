import React from 'react';

const List = (props) => {
  const {isActive = '', title, icon, href = '#'} = props;
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={href}>
        <i className={icon}></i>
        {title}
      </a>
    </li>
  );
};

export default List;
