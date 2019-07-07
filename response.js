'use strict'

exports.success = function(values, res){
    const data ={
        status: 200,
        message: "success request to server",
        data: values,
    };
    res.json(data);
    res.end();
};
exports.failed = function(error, res){
    const data ={
        status: error[0],
        message: error[1],
    };
    res.json(data);
    res.end();
};
exports.successPage = function(values, res){
    const data ={
        status: values[0],
        data: values[1],
        total: values[2],
        page: values[3],
        totalpage: values[4],
        limit: values[5],
        categoryId: values[6],
        sort: values[7],
    };
    res.json(data);
    res.end();
};