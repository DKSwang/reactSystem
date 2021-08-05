/*
 * @Author: xxuzhong.wang
 * @Date: 2021-07-16 17:02:16
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-07-27 14:55:40
 * @Description: 
 */
 const express = require("express");
 const mongoose   = require("mongoose")
// //连接mongodb 
  const DB_URl = "mongodb://127.0.0.1:27017"
  //连接方式一:
//  mongoose.connect(DB_URl,{useNewUrlParser:true,useUnifiedTopology:true });
// mongoose.connection.on("connected",function(){
//     console.log ("momgo Connect success")
// })
 //连接方式二:
mongoose.connect( DB_URl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,auto_reconnect:true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));
//类似于mysql的表,mongon里有文档和字段的概念   
const User = mongoose.model('user',new mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
})) 
//新增数据
// User.create({
//     user:'小花',
//     age:12
// },
// function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// }
// )
//新建App
const  app = express()
//删除数据
// User.remove({age:18},function(err,doc){
//     console.log(doc)
// })
//修改数据
User.update({'user':'小明'},{'$set':{"age":27}},function(err,doc){
    console.log(doc)
})
//访问根目录的返回数据-get请求
app.get('/',function(req,res){
    res.send("哈哈哈哈")
})
// 查询数据-返回数组
// app.get('/data', function (req, res) {
//     User.find({"user":"小明"},function(err,doc){
//        res.json(doc) 
//     })
//   })
//返回对象
app.get('/data', function (req, res) {
    User.findOne({"user":"小明"},function(err,doc){
       res.json(doc) 
    })
  })
//监听端口
app.listen(8078,function(){
    console.log("我是监听数据")
})

