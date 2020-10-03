Vue.component('fortuna',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block;">

        <input list="opcionesfortuna" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__fortuna en signo">
        <datalist id="opcionesfortuna">
            <option value="fortuna en aries">
            <option value="fortuna en tauro">
            <option value="fortuna en geminis">
            <option value="fortuna en cancer">
            <option value="fortuna en leo">
            <option value="fortuna en virgo">
            <option value="fortuna en libra">
            <option value="fortuna en escorpio">
            <option value="fortuna en sagitario">
            <option value="fortuna en capricornio">
            <option value="fortuna en acuario">
            <option value="fortuna en piscis">
        </datalist>



        <button  id="cargar1" type="submit">
            cargar
        </button>
        <button  id="borrar1" @click.prevent="deleteInput1()">
            borrar
        </button>
    </form>
    <form id="astro2" v-on:submit.prevent="cargarInput2()" action="" method="POST" style="display: inline-block; " >

        <input list="opcionesfortuna2" type="text" v-model="dato2"name="nombre" id="imput2 "placeholder="__Fortuna en la casa">
        <datalist id="opcionesfortuna2">
            <option value="fortuna en casa 1">
            <option value="fortuna en casa 2">
            <option value="fortuna en casa 3">
            <option value="fortuna en casa 4">
            <option value="fortuna en casa 5">
            <option value="fortuna en casa 6">
            <option value="fortuna en casa 7">
            <option value="fortuna en casa 8">
            <option value="fortuna en casa 9">
            <option value="fortuna en casa 10">
            <option value="fortuna en casa 11">
            <option value="fortuna en casa 12">
        </datalist>






        <button  id="cargar2" type="submit">
            cargar
        </button>
        <button  id="borrar2" @click.prevent="deleteInput2()">
            borrar
        </button>
        
    </form>
    
    <div>
        <div style="float: left; margin-top:10px;">
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
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'fortuna'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':42,
                'nombre':'fortuna en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })}
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':42,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'fortuna'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':42,
                'nombre':'fortuna en la casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })}
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':42,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('second',texto);
       })
    
    }
    ,
    deleteInput1(){
        this.dato1="";
        texto={'id':42}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        texto={'id':42}
        this.$emit('deleteDefinicion2',texto);
    }
    ,
    limpiarCampo(){
     this.deleteInput1();
     this.deleteInput2();   
       
    }
     
    
},

data(){
    return{
        dato1:'',
        dato2:''
        

                
    }
},
created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
});

