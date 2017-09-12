let express=require('express');

module.exports=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{//响应
    req.session['user_id'] = undefined;
    res.redirect('/');
  });
  return router;
};