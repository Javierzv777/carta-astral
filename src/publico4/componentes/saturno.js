Vue.component('saturno',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block;">

        <input list="opcionesSaturno" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__saturno en signo">
        <datalist id="opcionesSaturno">
            <option value="saturno en aries">
            <option value="saturno en tauro">
            <option value="saturno en geminis">
            <option value="saturno en cancer">
            <option value="saturno en leo">
            <option value="saturno en virgo">
            <option value="saturno en libra">
            <option value="saturno en escorpio">
            <option value="saturno en sagitario">
            <option value="saturno en capricornio">
            <option value="saturno en acuario">
            <option value="saturno en piscis">
        </datalist>



        <button  id="cargar1" type="submit">
            cargar
        </button>
        <button  id="borrar1" @click.prevent="deleteInput1()">
            borrar
        </button>
    </form>
    <form id="astro2" v-on:submit.prevent="cargarInput2()" action="" method="POST" style="display: inline-block; " >

        <input list="opcionesSaturno2" type="text" v-model="dato2"name="nombre" id="imput2 "placeholder="__Saturno en casa">
        <datalist id="opcionesSaturno2">
            <option value="saturno en casa 1">
            <option value="saturno en casa 2">
            <option value="saturno en casa 3">
            <option value="saturno en casa 4">
            <option value="saturno en casa 5">
            <option value="saturno en casa 6">
            <option value="saturno en casa 7">
            <option value="saturno en casa 8">
            <option value="saturno en casa 9">
            <option value="saturno en casa 10">
            <option value="saturno en casa 11">
            <option value="saturno en casa 12">
        </datalist>






        <button  id="cargar2" type="submit">
            cargar
        </button>
        <button  id="borrar2" @click.prevent="deleteInput2()">
            borrar
        </button>
        
    </form>
    
    <div>
        <div style="float: left;">
            <button id='limpiar' v-on:click="limpiarCampo">
                limpiar campo
            </button>
        </div>
        <form id="aspectos"  v-on:submit.prevent="cargarInput3()" action="" style="position:relative; left: 200px; margin-top: 10px;" >
        
        <div id="imput3"  style="float:left">
            <div v-for="(find,index) in dato3" >
                <input list="opcionesSaturno3" v-model="find.value" :key="index" placeholder="__aspectos de saturno">
                <datalist id="opcionesSaturno3">
                    <option value="saturno conjuncion ">
                    <option value="saturno trigono ">
                    <option value="saturno sextil ">
                    <option value="saturno cuadratura ">
                    <option value="saturno oposicion ">
                </datalist>



            </div>
        </div>
        
        <div style="position: absolute; left:280px">
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
        let peticionTipo={nombre:'saturno_ensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':18,
                'nombre':'Saturno en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })}
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':18,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'saturno_encasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':18,
                'nombre':'Saturno en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })}
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':18,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('second',texto);
       })
    
    },
    async cargarInput3(){
        
       
        await axios.post('/aspectos',this.dato3).then((response)=>{        
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
            'id':18,
            'aspectos':data
        }
        this.$emit('third',texto);
        
      });
      
    }
    
    ,
    addAspecto:function(){
        this.dato3.push({value:''})
        
    }
    ,
    deleteAspecto:function(index){
        console.log(index);
        console.log(this.dato3);
        let ind=this.dato3.length;
        this.dato3.splice(ind-1,1);
        let texto={'id':18}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        texto={'id':18}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        texto={'id':18}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        texto={'id':18}
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
        dato3:[]
                
    }
}
,
mounted(){
    this.addAspecto()
},
created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
});

