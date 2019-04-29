const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb");
const {bindNodeCallback} = require("rxjs");
const {} = require("rxjs/operators");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/templates");
app.set("view engine", "ejs");

/**
 * Exercise: convert this snippet below from callbacks to Observables.
 * It's okay to use only methods that you have learned so far.
 */

const connectAsObservable = bindNodeCallback(mongo.MongoClient.connect);

const db$ = connectAsObservable("mongodb://localhost:27017/dbhere");

app.get("/", (req, res) => {
  db$.subscribe({
    next: db => {
      db
        .collection("tasks")
        .find()
        .toArray((err2, data) => {
          if (err2) {
            console.error("Server crashed because:", err2);
            process.exit(1);
          } else {
            res.render("root", { tasks: data });
          }
        });
    },
    error: e => {
      console.error("Server crashed because:", e);
      process.exit(1);
    }
  });
});

app.listen(app.get("port"), () => {
  console.log("Node app is running on port", app.get("port"));
});

/**
 * If you want to run this in node.js, here is the package.json as well:
 *
{
  "main": "index.js",
  "scripts": {
    "start": "mongod --dbpath=~/uphill-rxjs-workshop & node index.js"
  },
  "dependencies": {
    "body-parser": "^1.16.0",
    "ejs": "^2.5.5",
    "express": "^4.14.1",
    "mongodb": "^2.2.22",
    "rxjs": "^6.5.1"
  }
}
 */
