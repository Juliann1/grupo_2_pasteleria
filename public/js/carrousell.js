var imagenes = ['/img/carrousel2.jpg','/img/fotocarrousell.jpg','/img/carrousel3.jpg'],

 cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener("click", e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('.fotos-carrousel img'),
            target = e.target;
        
        if(target == atras){
            if(cont >0){
                img.src = imagenes[cont -1];
                cont --;
            }else
            {
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length -1;
            }
        } else{
            if(target == adelante){
                if(cont < imagenes.length -1){
                    img.src = imagenes [cont + 1];
                    cont ++;
                }else
                {
                    img.src = imagenes[0];
                    cont = 0;
                }

            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.carrousel');
    carrousel(contenedor);
})