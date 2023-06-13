const admin = require("firebase-admin");
const credentials = require("./firebase-credentials");

module.exports = admin.initializeApp({
    credential: admin.credential.cert(credentials),
    databaseURL: 'https://test-c6240-default-rtdb.europe-west1.firebasedatabase.app/',
});