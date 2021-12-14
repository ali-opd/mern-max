import React from 'react';

import UserItem from './UserItem';
import './UserList.css';

export default function UserList({ items }) {
  if (items.length === 0) {
    return (
      <div class="center">
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          placeCount={item.places}
        />
      ))}
    </ul>
  );
}
