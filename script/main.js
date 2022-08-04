function filtrarPais(categoriaEscolhida){
    
    var listaDasCategoriasExistentes = document.getElementsByClassName('categoria-pais')

    for(i=0; i<listaDasCategoriasExistentes.length; i++){

        var categoriaAtual = document.getElementsByClassName('categoria-pais')[i]
        var listaDePais = document.getElementsByClassName('pais')
        
        var isCategoriaEscolhida = categoriaAtual.textContent.toUpperCase() == categoriaEscolhida.toUpperCase()
        var isCategoriaTodos = categoriaEscolhida.toUpperCase() == "TODOS"
        
        if(isCategoriaEscolhida || isCategoriaTodos){
            listaDePais[i].style.display = ''

        }else{
            listaDePais[i].style.display = 'none'
        }
    }
}

function colorirMundo(alo){
    console.log(alo.src)

        if(alo.src == "https://raw.githubusercontent.com/jessicapriscilla/primeiras-paginas-web-2022-main/master/img/likebutton.png"){
            alo.src = "https://raw.githubusercontent.com/jessicapriscilla/primeiras-paginas-web-2022-main/master/img/likebuttonyes.png"
        }else{
            alo.src = "https://raw.githubusercontent.com/jessicapriscilla/primeiras-paginas-web-2022-main/master/img/likebutton.png" 
        }
    
}