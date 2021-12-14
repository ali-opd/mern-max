import React from 'react';

import './UserItem.css';

export default function UserItem({ name, image, placeCount }) {
  return (
    <li className="user-item">
      <div class="user-item__content">
        <div class="user-item__image">
          <img src={image} alt={name} />
        </div>
        <div class="user-item__info">
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
          </h3>
        </div>
      </div>
    </li>
  );
}
