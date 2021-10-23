import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchBar({ onSubmit }) {
  const [searchQuerry, setSearchQuerry] = useState('');

  const onSearchFormChange = e => {
    setSearchQuerry(e.currentTarget.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if (searchQuerry.trim() === '') {
      toast.warn('No data entered');
      return;
    }
    onSubmit(searchQuerry);
    setSearchQuerry('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onSearchFormChange}
          value={searchQuerry}
        />
      </form>
    </header>
  );
}
