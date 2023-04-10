const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const tokenSecret = process.env.TOKEN_SECRET

    if (!req.headers.authorization) return res.status(403).json({ error: 'No credentials sent!' });
    
    const authorization = req.headers.authorization
    jwt.verify(authorization, tokenSecret, (err, user) => {
        
        if (err) return res.status(403).json({message:'pass incorrect'})

        req.user = user
    })

    next()
}
module.exports = {auth};