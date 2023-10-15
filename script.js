
if(navigator.userAgent.match(/Android|webOS|iPhone|iWindos Phone/i)){
    //Detectado escritorio 
    alert("Dispositivo movil" + navigator.userAgent)
}else{
    keyused=[];
    level=0;
    bandera=0;
    frase="simulaciondedatos";
    $(document).ready(function(){
        $("input").keyup(function(){
            key=$("input").val().toLowerCase();
            
            if(keyused.includes(key)){
                level++;
                changeImage(level)
            }else{
                if(frase.includes(key)){
                    array=agregarLetra(key);
                    bandera+=array.length;
                    console.log(array);
                    if(bandera===17){
                        alert("Ganaste :3")
                        $("#cuadro").prop("disabled", true)
                    }
                    keyused.push(key)
                }else{
                    level++;
                    changeImage(level);
                }
            }
            $("input").val('');
        });
      });
}

function changeImage(level){
    if(level>8){
        alert("YA NO HAY MAS VIDAS")
        $("#cuadro").prop("disabled", true)
    }else{
        $("#imagen").attr("src","imagenes/parte"+level+".png");
    }
    return;
}

function agregarLetra(letra){
    mapa = {
        s:[0,16],
        i:[1,7],
        m:[2],
        u:[3],
        l:[4],
        a:[5,13],
        c:[6],
        o:[8,15],
        n:[9],
        d:[10,12],
        e:[11],
        t:[14]
    }
    for(elemento of mapa[letra]){
        if(letra==="space")$("#letter"+elemento).html("&nbsp;");
        else $("#letter"+elemento).html(letra.toUpperCase());
    }
    return mapa[letra];
}