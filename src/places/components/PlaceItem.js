import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';

export default function PlaceItem({ image, title, address, description }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div class="place-item__image">
          <img src={image} alt={title} />
        </div>

        <div class="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>

        <div class="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT PLACE</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
}
