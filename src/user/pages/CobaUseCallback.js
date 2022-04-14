import React, { useEffect } from 'react';
import Button from '../../shared/components/FormElements/Button';

export default function CobaUseCallback({ onClick, count }) {
  useEffect(() => {
    onClick();
  }, [onClick]);

  // console.log('child render');
  return (
    <>
      {/* <p>{count}</p> */}
      <Button type='button' onClick={onClick}>
        ADD tambah
      </Button>
    </>
  );
}
