'use strict'

module.exports = function(routing){
    const controller = require('./controller');
    
    routing.get('/', controller.index);
    //note
    routing.get('/note/:idNote', controller.getAllNote);
    routing.get('/note', controller.getAllNote);
    routing.post('/note', controller.postNote);
    routing.patch('/note', controller.putNote);
    routing.delete('/note/:idNote', controller.deleteNote);
    //category
    routing.get('/category/:idCategory', controller.getAllCategory);
    routing.get('/category', controller.getAllCategory);
    routing.post('/category', controller.postCategory);
    routing.patch('/category', controller.putCategory);
    routing.delete('/category/:idCategory', controller.deleteCategory);
}
//just for remembering concept for beginner
//by id====>localhost:PORT/brench/ID, url example=>'localhost/note/1'
//routing.post('/note',cors(corsopt),controller.postNote);// enable CORS for single route