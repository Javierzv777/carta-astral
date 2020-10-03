Vue.component('venus',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block;">

        <input list="opcionesVenus" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__venus en signo">
        <datalist id="opcionesVenus">
            <option value="venus en aries">
            <option value="venus en tauro">
            <option value="venus en geminis">
            <option value="venus en cancer">
            <option value="venus en leo">
            <option value="venus en virgo">
            <option value="venus en libra">
            <option value="venus en escorpio">
            <option value="venus en sagitario">
            <option value="venus en capricornio">
            <option value="venus en acuario">
            <option value="venus en piscis">
        </datalist>



        <button  id="cargar1" type="submit">
            cargar
        </button>
        <button  id="borrar1" @click.prevent="deleteInput1()">
            borrar
        </button>
    </form>
    <form id="astro2" v-on:submit.prevent="cargarInput2()" action="" method="POST" style="display: inline-block; " >

        <input list="opcionesVenus2" type="text" v-model="dato2"name="nombre" id="imput2 "placeholder="__Venus en casa">
        <datalist id="opcionesVenus2">
            <option value="venus en casa 1">
            <option value="venus en casa 2">
            <option value="venus en casa 3">
            <option value="venus en casa 4">
            <option value="venus en casa 5">
            <option value="venus en casa 6">
            <option value="venus en casa 7">
            <option value="venus en casa 8">
            <option value="venus en casa 9">
            <option value="venus en casa 10">
            <option value="venus en casa 11">
            <option value="venus en casa 12">
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
                <input list="opcionesVenus3" v-model="find.value" :key="index" placeholder="__aspectos de venus">
                <datalist id="opcionesVenus3">
                    <option value="venus conjuncion ">
                    <option value="venus trigono ">
                    <option value="venus sextil ">
                    <option value="venus cuadratura ">
                    <option value="venus oposicion ">
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
        let peticionTipo={nombre:'venus_ensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':12,
                'nombre':'Venus en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })}
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':12,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'venus_encasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':12,
                'nombre':'Venus en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })}
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':12,
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
            'id':12,
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
        let texto={'id':12}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        texto={'id':12}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        texto={'id':12}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        texto={'id':12}
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

