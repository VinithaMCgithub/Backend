const jwt = require('jsonwebtoken')

const Authenticate=(req,res,next)=>{
    try{
        console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token,'p1@^%12')
        req.user = decode
        next()

    }
    catch{
        res.json({
            message:'Authentication Failed'
        })
    }
}
module.exports = Authenticate