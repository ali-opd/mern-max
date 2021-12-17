import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

export default function PlaceList({ items }) {
  if (items.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
        </Card>
        <button>Share Place</button>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map((item) => (
        <PlaceItem
          key={item.id}
          id={item.id}
          image={item.imageUrl}
          title={item.title}
          description={item.description}
          address={item.address}
          creatorId={item.creator}
          coordinates={item.location}
        />
      ))}
    </ul>
  );
}
