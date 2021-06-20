const {Router} = require('express');
const img = Router();
const multer = require('../multer/multer.conf');



// route  view
img.get('/',(req,res)=>{
    //solo le indicamos el nombre del archivo que esta en views ya que ya se ha configurado en index.js  
    res.render('index');
})


//POST enviar imagen
img.post('/upload', multer.upload, (req,res)=>{
    console.log(req.file)
    res.send('upload')
}) 



module.exports = img;