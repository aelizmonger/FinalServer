require("dotenv").config();
let express = require('express');
const db = require("./db");
let headers = require('./middleware/headers')
let user = require('./controllers/userController');
let upload = require('./Controllers/uploadController');
const app = express();
db.sync();
app.use(express.json());
app.use(headers);



/*
    EXPOSED ROUTES
*/
app.use('/test',user);


// ROUTE PROTECTION GOES HERE
app.use(require('./middleware/validate-session'));
/*
    PROTECTED ROUTES

*/
app.use('/upload', upload);





app.listen(process.env.PORT, function() {
    console.log(`server is listening on port ${process.env.PORT}`)
})