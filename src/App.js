import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './Components/Searchbar/SearchBar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button.jsx';
import Loader from 'react-loader-spinner';

function App() {
  const [querry, setQuerry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState(null);
  const [totalHits, setTotalHits] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [imgLength, setImgLength] = useState(null);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const onImageClick = e => {
    if ((e.target = 'IMG')) {
      toggleModal();
    }
    setLargeImg(e.currentTarget.dataset.src);
  };

  const onSearchSubmit = querry => {
    setQuerry(querry);
    setPage(1);
  };

  const onTotalHits = (totalHits, imgLength) => {
    totalHits === 0 ? setTotalHits(null) : setTotalHits(totalHits);
    setImgLength(imgLength);
  };
  console.log('imgLength', imgLength);
  console.log('totalHits', totalHits);

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };
  const onLoading = state => {
    setLoading(state => !state);
  };

  return (
    <div className="section">
      <SearchBar onSubmit={onSearchSubmit} />
      {loading && (
        <Loader
          type="Bars"
          className="spinner"
          color="#00BFFF"
          height={50}
          width={50}
        />
      )}
      <ImageGallery
        querry={querry}
        page={page}
        totalHits={onTotalHits}
        onClick={onImageClick}
        loading={onLoading}
      />

      {
        (totalHits > 12,
        totalHits > imgLength && <Button onLoadMore={onLoadMore} />)
      }
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImg} alt={querry} />
          <button className="closeBtn" type="button" onClick={toggleModal}>
            X
          </button>
        </Modal>
      )}
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}

export default App;
