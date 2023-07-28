import React from 'react';

const People = [
  {
    name: 'James',
    gender: 'Male'
  },
  {
    name: 'John',
    gender: 'Male'
  },
  {
    name: 'Marie',
    gender: 'Female'
  }
];

const Try = () => (
  <div>
    {People.map((person, index) => (
      <h1 key={index} className={person.gender === 'Male' ? 'text-blue' : 'text-pink'}>
        {person.name}
      </h1>
    ))}
  </div>
);

export default Try;
