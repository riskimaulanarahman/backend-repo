const admin = require('firebase-admin');

const serviceAccount = require('./src/credentials/serviceAccountKey.json'); // path ke file JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ebuddy-1f743-default-rtdb.firebaseio.com/" // URL database Anda
});

const uid = 'test-user-id';
// Buat token custom untuk pengguna
admin.auth().createCustomToken('uid')
  .then((customToken) => {
    console.log('Custom token:', customToken);
  })
  .catch((error) => {
    console.error('Error creating custom token:', error);
  });
