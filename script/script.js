window.onload = function thisPageMenu() {
    switch(document.title){
        case 'Adriel':
            menuHome.style.color = '#fff'
            menuHome.style.fontWeight = '600'
            break
        case 'Projects':
            menuProjects.style.color = '#fff'
            menuProjects.style.fontWeight = '600'
            break
        case 'Contacts':
            menuContacts.style.color = '#fff'
            menuContacts.style.fontWeight = '600'
            break
        case 'About':
            menuAbout.style.color = '#fff'
            menuAbout.style.fontWeight = '600'
            break
    }
}

function resizedScreen() {
    if(window.innerWidth >= 480) {
        itensMenu.classList.add('showMenu')
    }
    if(window.innerWidth >= 480 && window.innerWidth < 768) {
        adrielHomeImg.src = 'img/adriel-t-view.png'
    }else {
        adrielHomeImg.src = 'img/adriel.png'
    }
}

function clickMenu() {
    
    if(document.getElementsByClassName('showMenu').length){
        itensMenu.classList.remove('showMenu')
    }else{
        itensMenu.classList.add('showMenu')
    }
}

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

document.querySelectorAll('.hidden').forEach((element) => myObserver.observe(element))