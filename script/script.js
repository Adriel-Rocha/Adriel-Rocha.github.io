function resizedScreen() {
    if(window.innerWidth >= 480) {
        itens.style.display = 'block'
    }
    if(window.innerWidth >= 480 && window.innerWidth < 768) {
        adrielHomeImg.src = 'img/adriel-t-view.png'
    }else {
        adrielHomeImg.src = 'img/adriel.png'
    }
}

function clickMenu() {
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}


