import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL BOOKINGS
const getAllBookings = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings.json`, {
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
const createBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { firebaseKey: data.name };
      fetch(`${endpoint}/bookings/${setcode.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

// TODO: DELETE BOOKING
const deleteBooking = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// TODO: GET SINGLE BOOKING
const getSingleBooking = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// TODO: UPDATE BOOKING
const updateBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/bookings/${payload.firebaseKey}.json`, {
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
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBooking,
  getSingleBooking,
};
