const express = require("express");
const app = express();
const cors = require('cors');

// Routes -->
const moviesRouter = require('./routes/movies');
const seriesRouter = require('./routes/series');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/api/movies', moviesRouter);
app.use('/api/series', seriesRouter);


app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("Link ---> http://localhost:3000/api/movies");
    console.log("Link ---> http://localhost:3000/api/series");
})