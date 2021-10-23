import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({
  querry,
  page,
  totalHits,
  onClick,
  loading,
}) {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem
        querry={querry}
        page={page}
        ontotalHits={totalHits}
        onClick={onClick}
        onloading={loading}
      />
    </ul>
  );
}
