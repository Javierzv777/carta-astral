

Vue.component('nakshatra',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block; margin-right:300px;">

        <input list="opcionesnakshatra1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__nakshatra">
        <datalist id="opcionesnakshatra1">
            <option value="ashwini">
            <option value="bharani">
            <option value="krittika">
            <option value="rohini">
            <option value="mrigashira">
            <option value="ardra">
            <option value="punarvasu">
            <option value="pushya">
            <option value="ashlesha">
            <option value="magha">
            <option value="purva phalguni">
            <option value="uttara phalguni">
            <option value="hasta">
            <option value="chitra">
            <option value="swati">
            <option value="visakha">
            <option value="anuradha">
            <option value="Jyeshtha">
            <option value="mula">
            <option value="purva ashadha">
            <option value="uttara ashadha">
            <option value="abhijit">
            <option value="shravana">
            <option value="dhanishta">
            <option value="shatabhisha">
            <option value="purva bhadrapada">
            <option value="uttara bhadrapada">
            <option value="revati">
            

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
                'id':50,
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
            'id':50,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    },
    
    
    
    
    deleteInput1(){
        this.dato1="";
        texto={'id':50}
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

created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
});

