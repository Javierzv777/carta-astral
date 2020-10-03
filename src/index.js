const express= require('express');
const morgan= require('morgan');
const app= express();
const path=require('path');

const fs=require('fs');
//setting
 app.set('port', process.env.PORT || 3000);



 //static files
 
 app.use(express.static(path.join(__dirname,'public')));

 app.listen(app.get('port'),()=>{
   console.log(`server on port ${app.get('port')}`);
});

//middlelwares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//const respuesta= await pool.query('SELECT definicion FROM astrologia WHERE nombre=?', [nombres]);



 //routes
//app.get('/carta', (req,res)=>{
  //  res.json(respuesta);
// })

 app.post('/aspectos',async (req,res)=>{
  console.log(req); 
  var ascendente= req.body;
   let value=new Array(ascendente.length);
   let f=0;
   for(val of ascendente){
    value[f]=val.value; f++
   }
   
   var respuestas=new Array(value.length);
   let i=0;
   for(nom of value)
   {
     let respuesta= fs.readFileSync(`./src/datos/${nom}.txt`);
    //const respuesta= await pool.query('SELECT definicion FROM datos where nombre=?',[nombre[i]]);
    let definicion=(String.fromCharCode(...respuesta));
    respuestas[i]=definicion;
   i++
   }
  respuestas= {respuestas, value};

 res.json(respuestas);
});

/*app.post('/carta',async (req,res)=>{
  let datos= req.body;
  let {nombre}=datos;
  let respuesta= await pool.query('SELECT definicion FROM datos where nombre=?',[nombre]);
  res.json(respuesta);
});*/

app.post('/carta',async (req,res)=>{
  let datos= req.body;
  let {nombre}=datos;
  let respuesta= await fs.readFile(`./src/datos/${nombre}.txt`,(err,data)=>{
    if(err){
      console.log('error:',err);
    }else{
      respuesta=data;
      let definicion=(String.fromCharCode(...respuesta));
      
      res.json(definicion);
    }
    
  });
 
});