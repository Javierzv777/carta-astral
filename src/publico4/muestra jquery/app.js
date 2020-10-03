var count=1;

$(function(){
    
    
//ENVÍA Y RECIBE JSON PRIMER DATO
    $("#astro1").on("submit", function(e){
        e.preventDefault();        
            let titulo1=$("#titulo1");
            titulo1.text($('#imput1').val());
            if($('#imput1').val()!=""){
        $.ajax({
            url: "/carta",
            method:"POST",
            data:$('#astro1').serialize(),           
            success: function (datos){
                console.log(datos);
                let parrafo1=$("#parrafo1");
                parrafo1.text("");
                parrafo1.text(datos);
            }
        });
    }else{$('#parrafo1').text("");}
    });

//ENVÍA Y RECIBE UN JSON SEGUNDO DATO
    $("#astro2").on("submit", function(e){
        
        e.preventDefault();
            let titulo2=$("#titulo2");
            titulo2.text($('#imput2').val());
            if($('#imput2').val()!=""){
        $.ajax({
            url: "/carta",
            method:"POST",
            data:$('#astro2').serialize(),
            success: function (datos){
                let parrafo2=$("#parrafo2");
                parrafo2.text("");
                parrafo2.text(datos);
            }
        });
    }else{$('#parrafo2').text("");}
    });


    //AGREGA Y RECIBE JSON DEL TERCER DATO
    $("#aspectos").on("submit", function(e){
        e.preventDefault();
        console.log($('#aspectos').serialize());        
        if ((count == 1)&&($('#parrafo3').children().eq(0).val()==undefined)) {
            $.ajax({
                url:"/carta",
                method:"POST",
                data:$('#aspectos').serialize(),
                success: function(datos){       
                        $("#parrafo3").append(`
                        <h3 id='tit'></h3>
                        <p id='aspect'>${datos}</p>
                           ` );                        
                        let titulo=$('#tit');
                        titulo.text($('.tit:first-child').val());
                }
            });
        }else if (count>1){//........aqui vamos...................
            $.ajax({
            url:"/aspectos",
            method:"POST",
            data:$('#aspectos').serialize(),
            success: function(datos){
                console.log(datos)
                const nombre=datos.nombre;
                respuestas=datos.respuestas;
                console.log(nombre)
                console.log(respuestas)                
                $('#parrafo3').empty()
            count=0;
                
                
            respuestas.forEach(element => {
                    $("#parrafo3").append(`
                    <h3>${nombre[count]}</h3>
                    <p >${element}</p>
                       ` );count++
                //    console.log(element.definicion);
                });
            }
        });
    }
    });



    //AGREGA IMPUTS TERCER DATO
    $('#agregar3').on("click", function(e){
            
        e.preventDefault();
    $('#imput3').append("<div><input class='tit' type='text' name='nombre'placeholder='__Aspectos del sol'  ></input></div>")
        count++;
    });
    
    //borrando primer dato
    $('#borrar1').on("click", function(e){
        e.preventDefault();
   $('#parrafo1').empty()  
   $('#titulo1').empty()
   $('#imput1').val('');       
    });
    //borrando segundo dato
    $('#borrar2').on("click", function(e){
        e.preventDefault();
   $('#parrafo2').empty()  
   $('#titulo2').empty()
   $('#imput2').val('');       
    });
    //borrar tercer dato
    $('#borrar3').on("click", function(e){
        e.preventDefault();
   if(count>0) {
    $('#imput3').children().eq(count-1).remove();
    $('#parrafo3').children().eq(count*2-1).remove();
    $('#parrafo3').children().eq(count*2-2).remove();
    count--;}
        if(count==0){$('#imput3').empty();}         
    });
    //LANZAR TODOS LOS FORMULARIOS A LA VEZ
    
    $("#cargarCampo").on("click", function(){
        $("#astro1").trigger("submit");
        $("#astro2").trigger("submit");
        $('#aspectos').trigger('submit');
    });
    //LIMPIAR CAMPOS
    $('#limpiar').on('click',function(){
        for(i=0;i<=count+1;i++){
            $('#borrar3').trigger('click');
            
        }
        $('#borrar1').trigger('click');
        $('#borrar2').trigger('click');
    });

});

