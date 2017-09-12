let express=require('express');

module.exports=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{//响应
    res.render('reg.vue',{});
  });
  router.post('/submit',(req,res,next)=>{
    let sql=`SELECT * FROM user WHERE username="${req.body.username}"`;
    db.query(sql,(err,data)=>{
      if(err){
        console.log('reg submit database error')
      }else{
        if(data.length>0){
          res.send('用户名已存在');
        }else{
          let sql=`INSERT INTO user(ID,username,password) VALUES(0,"${req.body.username}","${req.body.password}")`;
          db.query(sql,(err,data)=>{
            if(err){
              console.log('reg submit insert data database error')
            }else{
              res.redirect('/login');
            }
          });
        }
      }
    });
  });
  return router;
};