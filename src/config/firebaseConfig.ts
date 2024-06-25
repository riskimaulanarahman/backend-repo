import * as admin from 'firebase-admin';

const serviceAccount = require('../credentials/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ebuddy-1f743-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

// export default db;
export { db, admin };