var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/workshop-be-mean';

mongoose.connect(dbURI);

// EVENTOS
// Quando conectado
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// Quando acontecer algum erro
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// Quando disconectar
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// Se o processo do Node finalizar, vai fechar a conexão do Mongoose
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


// Adiciona seus models
require('./models/beer');
