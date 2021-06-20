const express = require('express');
const path = require('path');
const app = express();
const route = require('./routes/image.routes') ;


// normalmente no se guardan los archivos dentro del mismo servidor
// lo habitual es utilizar hosting e archivos estaticos como amazon s3,
// son servicios  para subir archivos que requieren bastante peso, te da una direccion donde se ha almacenado el archivo
// tambien tenemos cloudinary  te permite hacer mas cosas, google cloudstorage etc...
// como funcionan-> subimos la imagen al directorio y despues se integra con S3 te dan un codigo un modulo  para
// subirla a sus servicios y despues ya puedes eliminar el archivo de tu carpeta depues la pides desde la url que te proporcionan
// routes

app.use('/',route)


// configure ejs for  views
app.set('views', path.join(__dirname, '/view'));
app.set('view engine', 'ejs');
// le indicamos que tiene acceso a la carpeta public ej. ver img localhost:3000/upload/123.jpg
app.use(express.static(path.join(__dirname, 'public')));

// configre
app.set('port',3000);




// up server
app.listen(app.get('port'), ()=>{
    console.log('server start at port: ', app.get('port'));
});