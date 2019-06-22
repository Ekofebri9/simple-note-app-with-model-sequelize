'use strict'

const response = require('./response');
const connection = require('./connection');
const modelNote = require('./models').note;
const modelCategory = require('./models').category;
const Op = require('sequelize').Op; 

exports.index = function(req, res, next ){
    response.success( 'welcome to my assigment' , res);
    next();
};

exports.getAllNote = function(req, res){
    let idNote = req.params.idNote;
    let search = req.query.search || null;
    let sort = req.query.sort || 'desc';
    let pages = parseInt(req.query.page) || 1;
    let limiter = parseInt(req.query.limit) || 1;
    let offseter = (pages-1)*limiter;
    let where = {} ;
   
    let error = [], data = [];
    if (idNote != null ){
        where = {id: idNote};
    } else if(search != null){
        where = {title :{[Op.like]: '%'+search+'%' }}
    } 
    modelNote.findAndCountAll({
        attributes: ['id','title','content','created_at','updated_at'],
        where: where,
        include: [ { model: modelCategory , attributes: ['category_name'] } ],
        order: [ ['created_at', sort] ],
        limit: limiter,
        offset: offseter
    })
    .then(function(result){
        if (result == null){
            error[0] = 404;
            error[1] = 'There is no data';
            response.failed(error,res);
        } else {
            data[0] = 200;
            data[1] = result.rows;
            data[2] = result.count;
            data[3] = pages;
            data[4] = Math.ceil(result.count/limiter);
            data[5] = limiter;
            response.successPage(data, res);
        }
    })
    .catch(function(err) {
        error[0] = 400;
        error[1] = err.message;
        response.failed(error,res);
    });
}

exports.getAllCategory = function(req, res){
    let idCategory = req.params.idCategory;
    let error = [];
    if (idCategory == null){
        modelCategory.findAll( {} )
        .then(function(result){
            response.success(result,res)
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res)
          })
    } else {
        modelCategory.findOne({ where: {id: idCategory} })
        .then(function(result){
            response.success(result,res)
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res)
          })
    }
    
}

exports.postNote = function(req, res){
    let title = req.body.title;
    let content = req.body.content;
    let idCategory = req.body.id_category;
    let error = [];
    if(title == null || content == null || idCategory == null){
        error[0] = 400;
        error[1] = err.message;
        response.failed(error,res);
    } else {
        modelNote.create({ title: title, content: content, category_id: idCategory })
        .then(function(result){
            response.success(result,res)
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res)
          })
    
    };
};

exports.postCategory = function(req, res){
    let categoryName = req.body.category_name;
    let date = new Date();
    if(categoryName == null){
        error[0] = 400;
        error[1] = err.message;
        response.failed(error,res);
    } else {
        modelCategory.create( { category_name: categoryName } )
        .then(function(result){
            response.success(result,res)
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res)
          })
    };
};

exports.putNote = function (req, res){
    let idNote = req.body.id_note;
    let title = req.body.title;
    let content = req.body.content;
    let categoryId = parseInt(req.body.id_category)
    let attributes = {} ;
    let error = [];
    if(idNote == null){
        error[0] = 400;
        error[1] = 'id_note is empty';
        response.failed(error,res);
    } else if(title != null){
        attributes.title = title ;
    } if (content != null){
        attributes.content = content
    } if (categoryId != null){
        attributes.category_id = categoryId;
    } console.log(attributes)
    modelNote.update( attributes, { where: {id: idNote} } )
        .then(function(rowsUpdate){
            if (rowsUpdate != 0) {
                response.success("success to save data", res) 
            }
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res);
          })
}

exports.putCategory = function (req, res){
    let idCategory =req.body.id_category;
    let categoryName = req.body.category_name;
    let error = [];
    if(idCategory == null || categoryName == null){
        error[0] = 400;
        error[1] = "catagory_name or id_category is empty";
        response.failed(error,res);
    } else {
        modelCategory.update( {category_name: categoryName}, { where: {id: idCategory} } )
        .then(function(rowsUpdate){
            if (rowsUpdate != 0) {
                response.success("success to save data", res) 
            }
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res);
          })
    }
}

exports.deleteNote = function(req, res) {
    let idNote = req.params.idNote;
    let error = [];
    if (idNote == null){
        error[0] = 404;
        error[1] = "field id_note must be not empty";
        response.failed(error,res);
    } else {
        modelNote.destroy( { where: { id: idNote } } )
        .then(function(rowsDelete){
            if (rowsDelete != 0) {
                response.success("success for deleting data", res) 
            } else {
                error[0] = 404;
                error[1] = "there isn't note with id="+idNote;
                response.failed(error,res);
            }
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res);
          })
    }
};

exports.deleteCategory = function(req, res) {
    let idCategory = req.params.idCategory;
    let error = [];
    if (idCategory == null){
        error[0] = 404;
        error[1] = "field id_category must be not empty";
        response.failed(error,res);
    } else {
        modelCategory.destroy( { where: { id: idCategory } } )
        .then(function(rowsDelete){
            if (rowsDelete != 0) {
                response.success("success for deleting data", res) 
            } else {
                error[0] = 404;
                error[1] = "there isn't catagory with id="+idCategory;
                response.failed(error,res);
            }
        }).catch(function(err) {
            error[0] = 400;
            error[1] = err.message;
            response.failed(error,res);
          })
    }
};