Vue.component('padre',{
    template://html 
    `
<div  >

    


        
        <div id='global'>
        <transition name="fade"
        >
        <div  v-if ="show"  >
            <p id='flashes'> {{flash}}
            </p>

        </div>
        </transition>
        <transition name="fade"
        >
        <div  v-if ="showtwo"  >
            <p id='flashestwo'> {{flash}}
            </p>

        </div>
        </transition>
        <div id='alerta' :style="{display:display}" >
        
            <button @click="thirdFlash" id="button">X</button>
            <p > Este es el alert del principio            </p>

        
        </div>
        <hijo id="padre"  
        @alertaFlash="primerFlash"
        @alertaFlashtwo="segundoFlash"
        ref="childComponent"
        ></hijo>
        </div>
    
    
</div>
`
,
data(){
    return {
        
        flash:'',
        show:false,
        showtwo:false,
        display:"block"
        
        
    }
}

,
methods:{
   
    primerFlash (ref){
        
        setTimeout(()=>{
         
            this.show=false;
        },2500);
        this.flash=ref;
        if(this.show==false){this.show=true;}
    
    },
    segundoFlash (ref){
        
        setTimeout(()=>{
         
            this.showtwo=false;
        },2500);
        
        if(this.showtwo==false){this.showtwo=true;
            this.flash=ref;}
        
    },
    thirdFlash (ref){
        
        this.display="none";
        
    }
}
});

