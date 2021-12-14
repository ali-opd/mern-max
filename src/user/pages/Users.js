import React from 'react';

import UserList from '../components/UserList';

export default function Users() {
  const USERS = [
    // {
    //   id: 'u1',
    //   name: 'Max Schawrx',
    //   image:
    //     'http://bisnisnews.id/core/images/uploads/gambar-20200914_Jp58ul.jpg',
    //   places: 3,
    // },
  ];

  return <UserList items={USERS} />;
}
