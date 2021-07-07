let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) =>{
    
            res.statusCode = 200;
            res.json({
               users:[{
                   name: 'Luiz',
                   age: '26',
                   id: 1
                   
                   
               }] 
                
            });
        
});



routes.get('/admin', (req, res)=>{
    
            res.statusCode = 200;
            res.json({
               users:[] 
                
            });    
});




    module.exports = routes;