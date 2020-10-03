Vue.component('hijo',{
    template://html 
    `
<div>

    <div id='arriba' style="clear: both;">
        <div style="height:80px;">
       

        

        <h1 style="color:white; font-style:italic; position:relative; 
         margin-botton:250px; padding-top:30px;">Carta Astral</h1>
        </div>
       
        <div style="text-align:center; color:white; font-style:italic;">
        <h3>El informe natal, Es un informe detallado de tus potenciales y de tu vida, incluye relaciones, inclinación vocacional, identidad y objetivos, panorama general de personalidad, salud, trabajo, inversiones e ingresos, dificultades y ventajas, etc.
         Se obtiene a partir de diferentes interpretaciones que se toman de la ubicación de los astros al momento del nacimiento. Este formulario y aplicación es solo de definiciones, para saber la ubicación de los planetas puedes cargar un radix o rueda natal en páginas que ofrecen ese servicio como:</h3>
        <a href="https://astro.com" target="_blank" >https://astro.com</a>
        </br>
        <a href="https://carta-natal.es" target="_blank" >https://carta-natal.es</a>
        <h3>o tambiés puedes descargar la aplicación aquarius2go en el celular y cargar el radix con todos los planetas y asteroides. 
        Si no sabes nada de astrología puedes aprender lo básico que son las casas, los signos, y los planetas con sus aspectos en los siguientes links:</h3>
        <a href="https://carta-natal.es/casas.php" target="_blank">casas</a>
        </br>
        <a href="https://carta-natal.es/signos_del_zodiaco.php" target="_blank">signos</a>
        </br>
        <a href="https://carta-natal.es/planetas.php" target="_blank">planetas</a>
        </br>
        <a href="https://carta-natal.es/aspectos.php" target="_blank">aspectos</a>
        </br>
        <a href="https://carta-natal.es/asteroides.php" target="_blank">asteroides</a>
        </br>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Ascendente y Medio Cielo</h1>
        <div class="campo">
        <ascendente-medioCielo 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></ascendente-medioCielo>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:5px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Sol</h1>

        <div class="campo">
        <sol 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></sol>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajarSol('Sol')">deslizar al campo cargado</button>           
        </div>

        <h1>Luna</h1>

        <div class="campo" >
        <luna 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></luna>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajarLuna()">deslizar al campo cargado</button>           
        </div>

        <h1>Mercurio</h1>

        <div class="campo" >
        <mercurio 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></mercurio>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Venus</h1>

        <div class="campo" >
        <venus 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></venus>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Marte</h1>

        <div class="campo" >
        <marte 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></marte>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        
        <h1>Júpiter</h1>

        <div class="campo" >
        <jupiter 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></jupiter>
        </div>
 
        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Saturno</h1>

        <div class="campo" >
        <saturno 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></saturno>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Urano</h1>

        <div class="campo" >
        <urano 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></urano>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Neptuno</h1>

        <div class="campo" >
        <neptuno 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></neptuno>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>
        
        <h1>Plutón</h1>

        <div class="campo" >
        <pluton 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></pluton>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>
        
        <h1>Lilith</h1>

        <div class="campo" >
        <lilith 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></lilith>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Quirón</h1>

        <div class="campo" >
        <quiron 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></quiron>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Ceres</h1>

        <div class="campo" >
        <ceres 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></ceres>
        </div>
        
        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Palas</h1>

        <div class="campo" >
        <palas 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></palas>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Juno</h1>

        <div class="campo" >
        <juno 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></juno>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Vesta</h1>

        <div class="campo" >
        <vesta 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></vesta>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Nodos lunares</h1>

        <div class="campo" >
        <nodoNorte 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></nodoNorte>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Parte de la Fortuna</h1>

        <div class="campo" >
        <fortuna 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></fortuna>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Planetas Retrogrados - principales Influencias Astrologicas</h1>
        <div id="retrogrados">
        <planetasRetrogradosYInfluencias
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        >
        </planetasRetrogradosYInfluencias>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Hemisferio dominante</h1>

        <div class="campo" >
        <hemisferio
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></hemisferio>
        </div>

        <div>
        <button style='float:right; margin-right:60px; margin-top:50px' @click="bajar()">deslizar al campo cargado</button>           
        </div>

        <h1>Nakshatra (Jyotish-Astrología Védica)</h1>

        <div class="campo" >
        <nakshatra 
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
        ></nakshatra>
        </div>

        <div  style='margin-top:30px;'>
        <capitulos         
        @deleteDefinicion1="limpiarDef1"
        @tipo1="agregarTipo1"
        ref="childComponent"
        ></capitulos>
        </div>


    <br>
        <div id="parrafo3" style="margin-top:30px; position:absolute;">
            <button @click="cargarCarta">cargar Carta</button>  
        </div>
        <div  style="margin-top:55px; position:absolute;">
            <button @click="limpiarCarta">limpiar Carta</button>  
        </div>
        <div id="abajo" style='margin-top:200px;'>
        </div>
       
        <consulta id="consulta" style="position:relative; margin-top:40px;"
        v-for="(consult, index) in consulta" 
        :key="consult.id"
        :consulta="consult"
        
        ></consulta>
        <div>
        <button style='float:right; margin-right:60px; margin-bottom:10px' @click="subir()">volver al formulario</button> 
        <button style='float:right; margin-right:60px; margin-bottom:80px' @click="subirYLimpiar()">limpiar y volver al formulario</button>           
        </div>
        
    </div>
</div>
`
,
data(){
    return {
        
        
        consulta:[{
            'id':1,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            
            },
            {'id':2,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'ascendente':true,
            'volver':false
            },
            {'id':3,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':4,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'medioCielo':true,
            'volver':false
            },
            {'id':5,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':6,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'sol':true,
            'volver':false
            
            },
            {'id':7,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':8,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'luna':true
            },
            {'id':9,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':10,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'mercurio':true,
            'volver':false
            },
            {'id':11,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':12,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'venus':true,
            'volver':false
            },
            {'id':13,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':14,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'marte':true,
            'volver':false
            },
            {'id':15,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':16,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'jupiter':true,
            'volver':false
            },
            {'id':17,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':18,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'saturno':true,
            'volver':false
            },
            {'id':19,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':20,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'urano':true,
            'volver':false
            },
            {'id':21,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':22,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'neptuno':true,
            'volver':false
            },
            {'id':23,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':24,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'pluton':true,
            'volver':false
            },{
            'id':25,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            
            },
            {'id':26,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'lilith':true,
            'volver':false
            },
            {'id':27,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':28,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'quiron':true,
            'volver':false
            },
            {'id':29,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':30,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'ceres':true,
            'volver':false
            },
            {'id':31,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':32,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'palas':true,
            'volver':false
            },
            {'id':33,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':34,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'juno':true,
            'volver':false
            },
            {'id':35,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':36,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'vesta':true,
            'volver':false
            },
            {'id':37,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':38,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'nodos':true,
            'volver':false
            },
            {'id':39,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':40,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':41,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':42,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'fortuna':true,
            'volver':false
            },
            {'id':43,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':44,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'retrogados':true,
            'volver':false
            },
            {'id':45,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':46,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'influencias':true,
            'volver':false
            },
            {'id':47,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
            },
            {'id':48,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'hemisferios':true,
            'volver':false
            },
            {
            'id':49,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[]
                
            },
            {'id':50,
            'tipo1':'',
            'descripcionTipo1':'',
            'nombre1':'',
            'definicion1':'',
            'tipo2':'',
            'descripcionTipo2':'',
            'nombre2':'',
            'definicion2':'',
            'aspectos':[],
            'nakshatra':true,
            'volver':false
            }
            
            ]
    }
}

,
methods:{
    
    subirYLimpiar(){
        this.limpiarCarta();
        const el=document.getElementById('arriba');
        if(el){
            el.scrollIntoView();
        }
    },
    subir(){
        const el=document.getElementById('arriba');
        if(el){
            el.scrollIntoView();
        }
    }
    ,
    bajar(){
        const el=document.getElementById('abajo');
        if(el){
            el.scrollIntoView();
        }
    },
    
    bajar(ref){
       const baj=document.getElementById(`bajar${ref}`);
       if(baj){
           baj.scrollIntoView();
       }else {const el=document.getElementById('abajo');
       if(el){
           el.scrollIntoView();
       }}
   },
    bajarLuna(){
        const sol=document.getElementById('bajarLuna');
        if(this.consulta[5].tipo1){
            sol.scrollIntoView();
        }else {const el=document.getElementById('abajo');
        if(el){
            el.scrollIntoView();
        }}
    },
    limpiarCarta:function(){
        this.$emit('clean');
        let flashName='Todas las definiciones han sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);
        this.consulta.forEach(element=>{
            element.volver=false;   
        });
            
    },
    cargarCarta: function() {
        this.$emit('update');
        let flashName='Todas las definiciones marcadas han sido cargadas al final del formulario';
        this.$emit('alertaFlash',flashName);
        this.consulta.forEach(element=>{
            element.volver=false;   
        });   
    },
    
    limpiarAspecto(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){
                let aspecto=element.aspectos.length;
                element.aspectos.splice(aspecto-1,1);
                if(element.definicion1==""&&element.definicion2==""&&aspectos==[]){element.volver=false;}   
            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    },
    limpiarAspectos(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){
               element.aspectos=[];
               if(element.definicion1==""&&element.definicion2==""&&aspectos==[]){element.volver=false;}   
            }
        });
        let flashName='Las definiciones de este campo han sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    }
    ,
    limpiarDef1(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){                                
                element.tipo1="";
                element.descripcionTipo1="";
                element.nombre1="";
                element.definicion1="";
                if(element.definicion1==""&&element.definicion2==""&&aspectos==[]){element.volver=false;}   

            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);           
    },
    limpiarDef2(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){                                
                element.tipo2="";
                element.descripcionTipo2="";
                element.nombre2="";
                element.definicion2="";
                if(element.definicion1==""&&element.definicion2==""&&aspectos==[]){element.volver=false;}   

            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    },
    agregarTipo1(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){ 
                element.tipo1=def.nombre;
                element.descripcionTipo1=def.definicion;
                element.volver=true;   
              }
        });
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);   
    },
    agregarTipo2(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){ 
                element.tipo2=def.nombre;
                element.descripcionTipo2=def.definicion;
                element.volver=true;   
              }
        });
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);      
    }
    ,
    agregarDefinicion1(def){
      this.consulta.forEach(element => {
          if(element.id==def.id){ 
            console.log(element.aspectos)  
            element.nombre1=def.nombre;
              element.definicion1=def.definicion;
              element.volver=true;   
            }
      });
        
    },
    agregarDefinicion2(def){
        this.consulta.forEach(element => {
            if(element.id==def.id){ 
                element.nombre2=def.nombre;
                element.definicion2=def.definicion;
                element.volver=true;   
              }
        });
    
    },
    agregarDefinicion3(def){
        
        this.consulta.forEach(element => {
            if(element.id==def.id){ 
                element.aspectos=def.aspectos;
                element.volver=true;   
              }
        });
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);   
    
    }
}
});

