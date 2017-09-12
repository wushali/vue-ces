let express=require('express');

module.exports=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{//响应
    if(!req.session['user_id']){
      //路由跳转 login
      res.redirect('/login');//路由跳转发送请求
    }else{
      //获取和session的user_id对应的用户数据
      let sql=`SELECT * FROM user WHERE ID=${req.session.user_id}`;
      db.query(sql,(err,data)=>{
        if(err){
          console.log('user database error');
        }else{
          console.log(data[0]);
          res.render('user.vue',{
            user:data[0]
          });
        }

      });

    }
  });
  return router;
};