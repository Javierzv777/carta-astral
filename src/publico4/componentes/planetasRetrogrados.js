

Vue.component('planetasRetrogradosYInfluencias',{
    template://html 
`
<div>

     <div  >
    <div style="float:left;">
         <div>       
        <button id="cargarCampo" @click="cargarCampo" style=" margin-right:5px;">
            cargar campo
        </button>
        </div>
        <div>
            <button id='limpiar' style="margin-top:5px" v-on:click="limpiarCampo">
                limpiar campo
            </button>
        </div>
        
    </div>
    


        <form id="aspectos"  v-on:submit.prevent="cargarInput3()" action="" 
        style=" position:relative; width:295px; float:left; " >
            
            <div id="imput3" style='float:left; position:relative; ' >
                <div v-for="(find,index) in dato3" >
                    <input list="planetaRetrogrado" v-model="find.value" :key="index" placeholder="__planeta retrogrado">
                    <datalist id="planetaRetrogrado">
                        <option value="mercurio retrogrado">
                        <option value="venus retrogrado">
                        <option value="marte retrogrado">
                        <option value="jupiter retrogrado">
                        <option value="saturno retrogrado">
                    </datalist>



                </div>
            </div>
            
           

            <div style="position: relative; float:right; ">
                <button  id="agregar3" @click.prevent= "addAspecto3" style="">
                    agregar
                </button>
                <button  id="borrar3" @click.prevent="deleteAspecto3">
                    borrar
                </button>
                <div>
                    <button  id="enviaraspectos3" type="submit"  >
                        cargar planetas
                    </button>
                    <div style="">

                    </div>
                </div>
                
               

                </div>
            
            </form>
        
            <div style=" ">
        
            <form id="aspectos"  v-on:submit.prevent="cargarInput4()" action="" 
            style="  position: relative; width:300px; float:left" >
            
            <div id="imput4"  style="float:left; margin-left:4px;">
                <div v-for="(find,index) in dato4" >
                    <input list="influencias" v-model="find.value" :key="index" placeholder="__Influencias">
                    <datalist id="influencias">
                        <option value="primer retorno de saturno ">
                        <option value="segundo retorno de saturno">
                        <option value="mercurio retrogrado">
                        <option value="jupiter mercurio transito">
                        <option value="jupiter venus transito">
                        <option value="saturno mercurio transito">
                        
                        
                    </datalist>



                </div>
            </div>
           
            <div style="position: relative;  float:right;">
                <button  id="agregar3" @click.prevent= "addAspecto4">
                    agregar
                </button>
                <button  id="borrar3" @click.prevent="deleteAspecto4">
                    borrar
                </button>
                <div>
                    <button  id="enviaraspectos4" type="submit">
                        cargar 
                    </button>
                    <div style="clear: both;">
                       
                    </div>
                </div>
                
            </div>
           

            </form>
        
    </div>
    
    </div>
</div>
   

`
,
methods:{
    


    cargarCampo(){
        
        this.cargarInput3();
        this.cargarInput4();
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
                'id':44,
                'aspectos':data
            }
            this.$emit('third',texto);
            
          });
          
    }
    
    ,
    async cargarInput4(){
        
      
        await axios.post('/aspectos',this.dato4).then((response)=>{        
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
                'id':46,
                'aspectos':data
            }
            this.$emit('third',texto);
            
          }); 
          
    }
    ,
    addAspecto3:function(){
        this.dato3.push({value:''})
        
    }
    ,
    addAspecto4:function(){
        this.dato4.push({value:''})
        
    }
    ,
    deleteAspecto3:function(index){
        console.log(index);
        console.log(this.dato3);
        let ind=this.dato3.length;
        this.dato3.splice(ind-1,1);
        let texto={'id':44}
        this.$emit('deleteAspecto',texto);
    },
    deleteAspecto4:function(index){
        console.log(index);
        console.log(this.dato4);
        let ind=this.dato4.length;
        this.dato4.splice(ind-1,1);
        let texto={'id':46}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteAspectos3(){
        this.dato3=[];
        texto={'id': 44}
        this.$emit('deleteAspectos',texto)
    
    }
    ,
    deleteAspectos4(){
        this.dato4=[];
        texto={'id': 46}
        this.$emit('deleteAspectos',texto)
    
    }
    ,
    limpiarCampo(){
      
     this.deleteAspectos3();
     this.deleteAspectos4();
    this.addAspecto3();
    this.addAspecto4();
    }
     
    
},

data(){
    return{
        count4:0,
        count3:0,
        dato3:[],
        dato4:[]
                
    }
}
,
mounted(){
    this.addAspecto3();
    this.addAspecto4();
},
created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
});

