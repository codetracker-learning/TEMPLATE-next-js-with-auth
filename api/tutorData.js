import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL TUTORS
const getAllTutors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutors.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// CREATE TUTOR
const createTutor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutors.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { firebaseKey: data.name };
      fetch(`${endpoint}/tutors/${setcode.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

// TODO: DELETE TUTOR
const deleteTutor = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutors/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// TODO: GET SINGLE TUTOR
const getSingleTutor = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutors/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// TODO: UPDATE TUTOR
const updateTutor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutors/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
//  TODO: FILTER BOOKS ON SALE
// const booksOnSale = (uid) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books.json?orderBy="uid"&equalTo=${uid}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const onSale = Object.values(data).filter((item) => item.sale);
//       resolve(onSale);
//     })
//     .catch(reject);
// });
// TODO: STRETCH...SEARCH BOOKS

export {
  getAllTutors,
  createTutor,
  deleteTutor,
  updateTutor,
  getSingleTutor,
};
