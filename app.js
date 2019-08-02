const express = require('express');
const expressLayouts = require('express-ejs-layouts');


//initialize app variable with express
const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

//Create port to run the app on 
const PORT = process.env.PORT || 5000;

//listen will run a server
app.listen(PORT, console.log(`Server started on port ${PORT}`))