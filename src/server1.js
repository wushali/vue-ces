let express = require('express');
let cookieSession = require('cookie-session');
let cookieParser = require('cookie-parser');
let multer = require('multer');
let bodyParser = require('body-parser');
let consolidate = require('consolidate'); //中间件，管理多个模板引擎
let mysql = require('mysql');

let server = express();//创建服务器
server.listen(8080);//监听

//配置中间件
server.use(bodyParser.urlencoded({
  limit:1024*5
}));

let objMulter = multer({dest:'./upload'});
server.use(objMulter.any());
server.use(cookieParser());

let arr=[];
for(let i=0;i<10000;i++){
  arr.push('myse'+Math.random());
}
server.use(cookieSession({
  keys:arr,
  name:'alex_id',
  maxAge:1000*10
}));

server.use(express.static('./www'));//静态页面托管

//模板引擎配置
//1. 输出类型设置
server.set('view.engine','html');
//2. 引擎模板目录设置
server.set('views','./views');
//3. 输出与引擎匹配
server.engine('html',consolidate.vue);

server.use('/',(req,res,next)=>{//响应
  //创建库连接
  let db=mysql.createConnection({
    host:'localhost',
    user:'root',
     password:'',
    database:'2017-8-29',
    port:3306
  });
  //查询库
  db.query(`SELECT * FROM banner`,(err,data)=>{
    if(err){
      throw new Error();
    }else{
      // console.log(typeof data);
      // console.log(data.length);
      // console.log(data[0].sub_title);
      res.render('user.vue',{
        banners:data
      });//渲染
    }
  });


});
