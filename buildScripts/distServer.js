import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
const port = 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users',function(req, res){
  res.json([
	{	"id": 1,"firstName": "wer",	"lastName": "cxv","email": "dsf"},
  {	"id": 1,"firstName": "sddfda",	"lastName": "sdf","email": "wref"},
  ]);
});

app.listen(port,function(err){
  if(err)
  {
    console.log(err);//eslint-disable-line no-console
  }
  else{
    open('http://localhost:'+port);
  }
});
