

Vue.component('hemisferio',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block; margin-right:300px;">

        <input list="opcioneshemisferio1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__hemisferio">
        <datalist id="opcioneshemisferio1">
            <option value="hemisferio sur">
            <option value="hemisferio norte">
            <option value="hemisferio occidental">
            <option value="hemisferio oriental">
            <option value="primer cuadrante">
            <option value="segundo cuadrante">
            <option value="tercer cuadrante">
            <option value="cuarto cuadrante">
            
            

        </datalist>



        <button  id="cargar1" type="submit">
            cargar
        </button>
        <button  id="borrar1" @click.prevent="deleteInput1()">
            borrar
        </button>
    </form>
    
    
    <div>
        <div style="float: left;">
            <button id='limpiar' v-on:click="limpiarCampo">
                limpiar campo
            </button>
        </div>
        
    </div>
    
    
</div>
   

`
,
methods:{
    


    cargarCampo(){
        this.cargarInput1();
       
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'nakshatra'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':48,
                'nombre':'Nakshatra',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })}
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':48,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    },
    
    
    
    
    deleteInput1(){
        this.dato1="";
        texto={'id':48}
        this.$emit('deleteDefinicion1',texto);
    }
    
    ,
    limpiarCampo(){
     this.deleteInput1();
        
      
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

