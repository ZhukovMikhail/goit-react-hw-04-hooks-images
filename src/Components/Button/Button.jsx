import React from 'react';
export default function Button({ onLoadMore }) {
  return (
    <button className="Button" onClick={onLoadMore}>
      Load more
    </button>
  );
}
