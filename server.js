const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//the database the app is connecting to
mongoose.connect('mongodb://localhost/tinyImprovements', { useNewUrlParser: true });

require('./routes/apiRoutes')(app);


app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});