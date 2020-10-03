Vue.component('consulta',{
    template: //html
`
<div >
<div v-if= "consulta.sol==true" id="bajarSol"></div>
<div v-if= "consulta.luna==true" id="bajarLuna"></div>
    <h3>{{consulta.tipo1}}</h3>
    <p>{{consulta.descripcionTipo1}}</p>
    <h3 style="margin-top:40px">{{consulta.nombre1}}</h3>
    <p>{{consulta.definicion1}}</p>

    <h3 style="margin-top:40px">{{consulta.tipo2}}</h3>
    <p>{{consulta.descripcionTipo2}}</p>
    <h3 style="margin-top:40px">{{consulta.nombre2}}</h3>
    <p>{{consulta.definicion2}}</p>

    <div v-for="aspecto of consulta.aspectos" style="margin-top:40px">
        <h3>{{aspecto.nombre}}</h3>
        <p>{{aspecto.definicion}}</p>
    </div>
    <button v-if="consulta.ascendente==true && consulta.volver==true"  @click="volver('Ascendente')">volver</button>
    <button v-if="consulta.medioCielo==true && consulta.volver==true"  @click="volver('Ascendente')">volver</button>
    <button v-if="consulta.sol==true && consulta.volver==true" @click="volver('Sol')">volver</button>
    <button v-if="consulta.luna==true && consulta.volver==true" @click="volver('Luna')">volver</button>
    <button v-if="consulta.mercurio==true && consulta.volver==true" @click="volver('Mercurio')">volver</button>
    <button v-if="consulta.venus==true && consulta.volver==true" @click="volver('Venus')">volver</button>
    <button v-if="consulta.marte==true && consulta.volver==true" @click="volver('Marte')">volver</button>
    <button v-if="consulta.jupiter==true && consulta.volver==true" @click="volver('Jupiter')">volver</button>
    <button v-if="consulta.saturno==true && consulta.volver==true" @click="volver('Saturno')">volver</button>
    <button v-if="consulta.urano==true && consulta.volver==true" @click="volver('Urano')">volver</button>
    <button v-if="consulta.neptuno==true && consulta.volver==true" @click="volver('Neptuno')">volver</button>
    <button v-if="consulta.pluton==true && consulta.volver==true" @click="volver('Pluton')">volver</button>
    <button v-if="consulta.lilith==true && consulta.volver==true" @click="volver('Lilith')">volver</button>
    <button v-if="consulta.quiron==true && consulta.volver==true" @click="volver('Quiron')">volver</button>
    <button v-if="consulta.ceres==true && consulta.volver==true" @click="volver('Ceres')">volver</button>
    <button v-if="consulta.palas==true && consulta.volver==true" @click="volver('Palas')">volver</button>
    <button v-if="consulta.juno==true && consulta.volver==true" @click="volver('Juno')">volver</button>
    <button v-if="consulta.vesta==true && consulta.volver==true" @click="volver('Vesta')">volver</button>
    <button v-if="consulta.nodos==true && consulta.volver==true" @click="volver('Nodos')">volver</button>
    <button v-if="consulta.fortuna==true && consulta.volver==true" @click="volver('Fortuna')">volver</button>
    <button v-if="consulta.retrogrados==true && consulta.volver==true" @click="volver('Retrogrados')">volver</button>
    <button v-if="consulta.influencias==true && consulta.volver==true" @click="volver('Retrogrados')">volver</button>
    <button v-if="consulta.hemisferios==true && consulta.volver==true" @click="volver('Hemisferios')">volver</button>
    <button v-if="consulta.nakshatra==true && consulta.volver==true" @click="volver('Nakshatras')">volver</button>
</div>

`
,

props:['consulta'],
data(){
    return{
        
    };
},
methods:{
    
}
});