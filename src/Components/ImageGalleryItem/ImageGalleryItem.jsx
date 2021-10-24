import React, { useState, useEffect, useMemo } from 'react';
import fetchImg from '../services/fetch';

export default function ImageGalleryItem({
  querry,
  page,
  ontotalHits,
  onClick,
  onloading,
}) {
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [error, setError] = useState(false);

  const memo = useMemo(() => setImages([]), [querry]);

  const pageDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (querry === '' || querry === null) {
      return;
    }
    setError(false);
    onloading();
    fetchImg(querry, page)
      .then(r => {
        setImages([...images, ...r.hits]);
        setTotalHits(r.totalHits);
        ontotalHits(r.totalHits, images.length + 12);
        if (page !== 1) {
          pageDown();
        }
      })
      .catch(error => {
        console.log(error);
        setImages([]);
        setError(true);
        ontotalHits(null);
      })
      .finally(() => {
        onloading();
      });
    //
  }, [querry, page]);

  return !error ? (
    totalHits !== 0 ? (
      images.map(image => (
        <li className="ImageGalleryItem" key={image.id}>
          <img
            onClick={onClick}
            src={image.webformatURL}
            data-src={image.largeImageURL}
            alt={image.tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))
    ) : (
      <h2 className="title"> No match found ...</h2>
    )
  ) : (
    <h2 className="title"> Something goes wrong ... </h2>
  );
}
