import * as admin from "firebase-admin";

const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://work-less-development.firebaseio.com"
});

export default admin;
