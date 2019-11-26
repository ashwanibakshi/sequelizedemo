const sequelize = require('./config/db');
const express   = require('express');
const bodyParser = require('body-parser');
const path      =  require('path');      

var app = express();

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  app.get('/',(req,res)=>{
    res.redirect('/member/getall');
  })

app.use('/member',require('./routes/members'));

  var port = process.env.PORT || 3000;
  app.listen(port,()=>console.log('server running at '+port));

  module.exports = app;
