const USER_KEY = '22985243-b477986a48324befacd1d8a65';

const fetchImg = (querry, page) =>
  fetch(
    `https://pixabay.com/api/?q=${querry}&page=${page}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(r => r.json());

export default fetchImg;
