const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'gzwDDFQq4_W-6Ms5aAgkiV0d7CdVYFVwItKEGYIcSkU';

function checkServerRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getPictures = () => {
  return fetch(`${BASE_URL}/search/photos`, {
    method: 'GET',
    headers: {
      authorization: ACCESS_KEY,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => checkServerRes(res));
}

export const getRandomPicture = () => {
  return fetch(`${BASE_URL}/photos/random`, {
    method: 'GET',
    headers: {
      authorization: ACCESS_KEY,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => checkServerRes(res));
}