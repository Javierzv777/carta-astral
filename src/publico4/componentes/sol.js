

Vue.component('sol',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block;">

        <input list="opciones1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__Sol en signo">
        <datalist id="opciones1">
            <option value="sol en aries">
            <option value="sol en tauro">
            <option value="sol en geminis">
            <option value="sol en cancer">
            <option value="sol en leo">
            <option value="sol en virgo">
            <option value="sol en libra">
            <option value="sol en escorpio">
            <option value="sol en sagitario">
            <option value="sol en capricornio">
            <option value="sol en acuario">
            <option value="sol en piscis">
        </datalist>



        <button  id="cargar1" type="submit">
            cargar
        </button>
        <button  id="borrar1" @click.prevent="deleteInput1()">
            borrar
        </button>
    </form>
    <form id="astro2" v-on:submit.prevent="cargarInput2()" action="" method="POST" style="display: inline-block; " >

        <input list="opciones2" type="text" v-model="dato2"name="nombre" id="imput2 "placeholder="__Sol en casa">
        <datalist id="opciones2">
            <option value="sol en casa 1">
            <option value="sol en casa 2">
            <option value="sol en casa 3">
            <option value="sol en casa 4">
            <option value="sol en casa 5">
            <option value="sol en casa 6">
            <option value="sol en casa 7">
            <option value="sol en casa 8">
            <option value="sol en casa 9">
            <option value="sol en casa 10">
            <option value="sol en casa 11">
            <option value="sol en casa 12">
        </datalist>






        <button  id="cargar2" type="submit">
            cargar
        </button>
        <button  id="borrar2" @click.prevent="deleteInput2()">
            borrar
        </button>
        
    </form>
    
    <div >
        <div style="float: left;">
            <button id='limpiar' v-on:click="limpiarCampo">
                limpiar campo
            </button>
        </div>
        <form id="aspectos"  v-on:submit.prevent="cargarInput3()" action="" style="position:relative; left: 200px; margin-top: 10px;" >
        
        <div id="imput3"  style="float:left; position:relative;">
            <div style="display:inline-block;">
            <div v-for="(find,index) in dato3" >
                <input list="opciones3" v-model="find.value" :key="index" placeholder="__aspectos del" style='width:110px; '>
                <datalist id="opciones3">
                    <option value="sol conjunción ">
                    <option value="sol trigono ">
                    <option value="sol sextil ">
                    <option value="sol cuadratura ">
                    <option value="sol oposición ">
                </datalist>
            </div>
            </div>
            <div style=" display:inline-block; position:absolute; left:120px;">
            <div v-for="(find,index) in dato4">
                <input list="opciones4" v-model="find.value" :key="index" placeholder="_sol" style="width:70px; position:relative;  display:inline-block;">
                <datalist id="opciones4">
                    <option value="luna">
                    <option value="mercurio">
                    <option value="venus">
                    <option value="marte">
                    <option value="júpiter">
                </datalist>

            </div>
            </div>

        </div>
        
        <div style="position: absolute; left:300px">
            <button  id="agregar3" @click.prevent= "addAspecto">
                agregar
            </button>
            <button  id="borrar3" @click.prevent="deleteAspecto">
                borrar
            </button>
            <div>
                <button  id="enviaraspectos" type="submit">
                    cargar aspectos
                </button>
                <div style="clear: both;">

                </div>
            </div>
            
        </div>
        
        </form>
    </div>
    
    
</div>
   

`
,
methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'sol_ensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':6,
                'nombre':'Sol en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':6,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })};
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'sol_encasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':6,
                'nombre':'Sol en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })}
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':6,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('second',texto);
       })
    
    },
    async cargarInput3(){

        
        
    
            for (f=0;f<=this.dato3.length;f++){
            let dato3= this.dato3[f].value;

            let dato4=this.dato4[f].value;
            let dato5=dato3.concat(dato4);
           
            this.dato5[f].value=dato5;
           console.log(this.dato5[0]);
            this.consultarAspecto();
            }
        },
        async consultarAspecto(){

           

        let {value}=this.dato5[0];
        
       if (value!=''){
           
        await axios.post('/aspectos',this.dato5).then((response)=>{        
        let nombre=response.data.value;
        let definicion=response.data.respuestas;
        let data=new Array(definicion.length);
        let i=0;
        nombre.forEach(element => {
           if(definicion[i]!=""){
            data[i]={
                'nombre':element,
                'definicion':definicion[i]
            }}else{data[i]={'nombre':'','definicion':''}
        }
            i++;
        });
        let texto={
            'id':6,
            'aspectos':data
        }
        this.$emit('third',texto);
        
      });
    }
    }
    
    ,
    addAspecto:function(){
        this.dato3.push({value:''});
        this.dato4.push({value:''});
        this.dato5.push({value:''});

    }
    ,
    deleteAspecto:function(index){
       
        let ind3=this.dato3.length;
        this.dato3.splice(ind3-1,1);
        let ind4=this.dato4.length;
        this.dato4.splice(ind4-1,1);
        let ind5=this.dato4.length;
        this.dato5.splice(ind5-1,1);
        let texto={'id':6}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        texto={'id':6}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        texto={'id':6}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        this.dato4=[];
        this.dato5=[];
        texto={'id':6}
        this.$emit('deleteAspectos',texto)
    }
    ,
    limpiarCampo(){
     this.deleteInput1();
     this.deleteInput2();   
     this.deleteAspectos();
     this.addAspecto();   
    }
     
    
},

data(){
    return{
        dato1:'',
        dato2:'',
        count:0,
        dato3:[],
        dato4:[],
        dato5:[]
                
    }
}
,
mounted(){
    this.addAspecto();
},
created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
});

