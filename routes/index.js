let express = require('express');
let routes = express.Router();


routes.get('/',(req, res)=>{
    
            res.statusCode = 200;
            res.end("Caminho pela /");
    
});

module.exports = routes;