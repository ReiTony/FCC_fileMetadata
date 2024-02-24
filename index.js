const express = require('express');
const multer  = require('multer');  
const upload = multer({ dest: 'uploads/' })
const app = express();
const cors = require('cors');
require('dotenv').config()


app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
