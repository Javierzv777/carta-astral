Vue.component('ascendente-medioCielo',{
    template://html 
`
<div>


    <button id="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>

    <form id="astro1"  action="" v-on:submit.prevent="cargarInput1()" method="POST" style="display: inline-block;">

        <input list="opcionesAscendente" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__Ascendente">
        <datalist id="opcionesAscendente">
            <option value="ascendente en aries">
            <option value="ascendente en tauro">
            <option value="ascendente en geminis">
            <option value="ascendente en cancer">
            <option value="ascendente en leo">
            <option value="ascendente en virgo">
            <option value="ascendente en libra">
            <option value="ascendente en escorpio">
            <option value="ascendente en sagitario">
            <option value="ascendente en capricornio">
            <option value="ascendente en acuario">
            <option value="ascendente en piscis">
        </datalist>



        <button  id="cargar1" type="submit">
            cargar
        </button>
        <button  id="borrar1" @click.prevent="deleteInput1()">
            borrar
        </button>
    </form>
    <form id="astro2" v-on:submit.prevent="cargarInput2()" action="" method="POST" style="display: inline-block; " >

        <input list="opcionesMedioCielo" type="text" v-model="dato2" name="nombre" id="imput2 " placeholder="__Medio Cielo">
        <datalist id="opcionesMedioCielo">
            <option value="medio cielo en aries">
            <option value="medio cielo en tauro">
            <option value="medio cielo en geminis">
            <option value="medio cielo en cancer">
            <option value="medio cielo en leo">
            <option value="medio cielo en virgo">
            <option value="medio cielo en libra">
            <option value="medio cielo en escorpio">
            <option value="medio cielo en sagitario">
            <option value="medio cielo en capricornio">
            <option value="medio cielo en acuario">
            <option value="medio cielo en piscis">
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
        let peticionTipo={nombre:'ascendente'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':2,
                'nombre':'Ascendente en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })}
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':2,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'medio_cielo'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':4,
                'nombre':'Medio Cielo en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })}
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':4,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })
    
    }
    ,
    deleteInput1(){
        this.dato1="";
        texto={'id':2}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        texto={'id':4}
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

