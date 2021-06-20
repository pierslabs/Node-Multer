const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
 
const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/upload'),
    filename: (req,file,cb)=>{
        cb(null, uuid.v4() + path.extname(file.originalname))
    }
})

// midleware

 const upload = multer({
    storage,
    dest: path.join(__dirname,'../public/upload'),
    limits:{fileSize:1000000},
    fileFilter: (req, file, cb)=>{
        const fileTipes = /jpeg|jpg|png|gif/;
        const mimeType = fileTipes.test(file.mimetype);
        const extName = fileTipes.test(path.extname(file.originalname));
        if(mimeType && extName){
            return cb(null, true)
        }else{
            cb("error tipo de archivo no soportado")
        }


    }
    }).single('image');

module.exports = {
    storage,
    upload
}