const epxress=require('express');
const path=require('path');
const app=epxress();
const publicPath=path.resolve(__dirname,'./public');
app.use(epxress.static(publicPath));
app.listen(3000,()=>{
    console.log("puerto 3000 activo");
});
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})