const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'gzwDDFQq4_W-6Ms5aAgkiV0d7CdVYFVwItKEGYIcSkU';

function checkServerRes(res: any) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getPictures = ({ page, query }) => {
  return fetch(`${BASE_URL}/search/photos?page=${page}&query=${query}`, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => checkServerRes(res));
}

export const getRandomPicture = () => {
  return fetch(`${BASE_URL}/photos/random`, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => checkServerRes(res));
}
