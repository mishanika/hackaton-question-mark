const express = require("express");
const cors = require("cors");
const qs = require("qs");
//const routes = require("./routes/index");
const fs = require("fs");
const axios = require("axios");
const admin = require("./firebase/firebase");

const database = admin.database();
const app = express();
const port = 3030;
const jsonParser = express.json();
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:3000",
};


app.use(express.json());
app.use(cors(corsOptions));
app.use("/assets", express.static("assets"));
//app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});

app.post("/exchange_token", jsonParser, function (request, response) {
  const url = `https://www.strava.com/oauth/token`;
  const usersRef = database.ref('users');
  
  axios
    .post(url, {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: request.body.code,
      grant_type: "authorization_code",
    })
    .then((data) => {
        console.log(data.data);

        usersRef.child(data.data.athlete.id).child("accessToken").set(data.data.access_token);
        usersRef.child(data.data.athlete.id).child("refreshToken").set(data.data.refresh_token);
        //usersRef.child("user").child("userId").set(data.data.athlete.id);
        response.json({ userId: data.data.athlete.id});
    })
    .catch((error) =>{ 
        console.log(error);
        response.status(500);
    });
});

// app.get("/authorize", jsonParser, function (request, response) {
//     response
//         .set("Access-Control-Allow-Origin", "*")
//         .redirect(
//             "https://www.strava.com/oauth/authorize?client_id=108156&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read"
//         );
// });
