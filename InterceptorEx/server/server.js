// import the modules

let express = require('express');
let mongodb = require('mongodb');
let cors = require('cors');
let bodyparser = require('body-parser');

// create the rest object

let app = express();

app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: false}));

let nareshIt = mongodb.MongoClient;

app.post('/login',[require('./auth')], (req, res) => {
nareshIt.connect('mongodb://localhost:27017/angular7am', (err, db) => {
  if (err) throw err;
  else{
    db.collection('login_details').find({'uname': req.body.uname, 'upwd': req.body.upwd}).toArray(( err, array) => {
      if (err) throw err;
      else{
        if(array.length>0){
          res.send({login: 'success'});
        }
      }
    } );

  }
} );
});

app.listen(6242);
console.log('server is listening port no 6242');
