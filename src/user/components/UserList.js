import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';

import './UserList.css';

export default function UserList({ items }) {
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className='user-list'>
      {items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          placeCount={item.places.length}
        />
      ))}
    </ul>
  );
}
