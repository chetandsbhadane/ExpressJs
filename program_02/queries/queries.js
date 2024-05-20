exports.getAllDataQuery = function(query){
    return "select * from product"
}

exports.getByPidQuery = function(query){
    return "select * from product where pid=?"
}

exports.postQuery = function(query){
    return "insert into product values(?,?,?,?)"
}

exports.deleteQuery = function(query){
    return "delete from product where pid=?"
}

exports.putQuery = function(query){
    return "update product set pname=?,qty=?,price=? where pid=?"
}