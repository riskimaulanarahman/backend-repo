import * as admin from 'firebase-admin';

const serviceAccount = require('../credentials/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databases.firebaseio.com"
});

const db = admin.firestore();

export { db, admin };