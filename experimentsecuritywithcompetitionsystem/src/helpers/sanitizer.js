const sanitizer = require ('sanitizer');

var sanitize ={ 
    sanitizeData: function(req,res,next){

        var dTitle = req.body.designTitle;
        var dDescription = req.body.designDescription;

        if(sanitizer.sanitize(dTitle)&& sanitizer.sanitize(dDescription)){
            next();
        }else{
            res.status(500);
            res.send('{"message": Validation Unsuccessful"}');
        }
    },

}

module.exports =sanitize;