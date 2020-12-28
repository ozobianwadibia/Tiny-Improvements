// use the format below for the connection string

// mongodb+srv://<database name on Atlas>:<password>@cluster0.ekb8f.mongodb.net/<dbname (anything here)>?retryWrites=true&w=majority

const connectionString = `mongodb+srv://${process.env.DB_PROJECTNAME}:${process.env.DB_PASSWORD}@cluster0.ekb8f.mongodb.net/${process.env.DB_USERNAME}?retryWrites=true&w=majority`;

module.exports = connectionString;
