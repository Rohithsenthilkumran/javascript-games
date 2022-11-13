const express=require('express');
const path=require('path');
const app=express();
const http=require('http').createServer(app);


    app.use(express.static(path.join(__dirname,'public')));



const port=process.env.PORT || 2000;
http.listen(port,()=>{
    console.log('server is runing on the port',port);
})