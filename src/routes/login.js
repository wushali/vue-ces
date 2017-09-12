let express=require('express');

module.exports=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{//响应
    res.render('login.vue',{});
  });
  router.post('/submit',(req,res,next)=>{
    // req.body.username/password
    let sql=`SELECT * FROM user WHERE username="${req.body.username}"`;
    db.query(sql,(err,data)=>{
      if(err){
        console.log('login submit database error');
      }else{
        // console.log(data);
        if(data.length>0){
          if(data[0].password==req.body.password){
            //路由跳转 到 user
            req.session['user_id']=data[0].ID;//种session同时给浏览器写cookie
            res.redirect('/user');
          }else{
            res.send('用户名或者是密码有误');
          }
        }else{
          res.send('用户名不存在');
        }
      }
    });
  });
  return router;
};