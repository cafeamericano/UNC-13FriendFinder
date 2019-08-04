module.exports = function(app){

    app.get('/api/allrecords', function(req, res){
        res.send('hit the all records api route')
    });

}