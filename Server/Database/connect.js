const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://test:test1@cluster1.fya8k.mongodb.net/triplan?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })