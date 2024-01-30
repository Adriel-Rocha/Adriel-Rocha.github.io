const langSelected = document.querySelector('.lang-selected')
const langUl = document.querySelector('.lang ul')
const siteEn = document.querySelector('.site-en')
const siteBr = document.querySelector('.site-br')
const pagAbout = document.querySelector('.about')
const btnAbout = document.querySelector('.btnAbout')
const pagPortfolio = document.querySelector('.pagPortfolio')
const btnPortfolio = document.querySelector('.btnPortfolio')
const logoHome = document.querySelector('.homeLogo')
const changeThemeIcon = document.querySelector('.themeIcon')
const html = document.querySelector('html')
const logoImgHome = document.querySelector('.logoImgHome')
const logoHeader = document.querySelector('.logoHeader')
const footerSection = document.querySelector('.footerSection')
const cardProjects = document.querySelector('.card')
const contentP = document.querySelector('.contentP')
const container = document.querySelector('.containerCards')
const elements = document.querySelectorAll('.hidden')

/**
 * 
 *  functions select the language
 * 
 */

function selectedEnglish() {
    showLanguages()
}

function selectedPortugues() {
    showLanguages()
}

function clickFlag() {
    showLanguages()
}

function showLanguages() {
    if(langUl.style.display == 'block'){
        langUl.style.display = 'none'
    }
    else {
        langUl.style.display = 'block'
    }
}

/**
 *  
 * functions click go to section Portfolio
 * 
 */

function clickBtnPortfolio() {
    if (!btnPortfolio.classList.contains('pagSelected')) {
        addAnimationsWithGoToPortfolioPag()
    } else {
        AddAnimationWhenAlreadyOnThePortfolioPag()
    }
}

function addAnimationsWithGoToPortfolioPag() {
    btnPortfolio.classList.add('pagSelected')
    btnAbout.classList.remove('pagSelected')
    pagPortfolio.classList.remove('animationHidePortfolio')
    pagPortfolio.classList.add('animationShowPortfolio')
    pagAbout.classList.remove('animationShowAbout')
    pagAbout.classList.add('animationHideAbout')

}

function AddAnimationWhenAlreadyOnThePortfolioPag() {
    pagPortfolio.classList.add('animationShake')
    setTimeout(() => {
        pagPortfolio.classList.remove('animationShake')
        pagPortfolio.classList.remove('animationShowPortfolio')
    }, 2000)
}

/**
 *  
 * functions click go to section About
 * 
 */


function clickBtnAbout() {
    if (!btnAbout.classList.contains('pagSelected')) {
        addAnimationsWithGoToAboutPag()
    } else {
        AddAnimationWhenAlreadyOnTheAboutPag()
    }
}


function addAnimationsWithGoToAboutPag() {
    btnAbout.classList.add('pagSelected')
    btnPortfolio.classList.remove('pagSelected')
    pagAbout.classList.remove('animationHideAbout')
    pagAbout.classList.add('animationShowAbout')
    pagPortfolio.classList.remove('animationShowPortfolio')
    pagPortfolio.classList.add('animationHidePortfolio')
}

function AddAnimationWhenAlreadyOnTheAboutPag() {
    pagAbout.classList.add('animationShake')
    setTimeout(() => {
        pagAbout.classList.remove('animationShake')
        pagAbout.classList.remove('animationShowAbout')
    }, 200)
}

/**
 *  
 * functions when finished animations go to sections
 * 
 */

pagAbout.onanimationend = () => {
    if (btnPortfolio.classList.contains('pagSelected')) {
        hideAboutPagAndShowPortfolioPag()
    }
}

function hideAboutPagAndShowPortfolioPag() {
    pagAbout.style.display = 'none'
    pagPortfolio.style.display = 'block'
}


pagPortfolio.onanimationend = () => {
    if (btnAbout.classList.contains('pagSelected')) {
        hidePortfolioPagAndShowAboutPag()
    }
}


function hidePortfolioPagAndShowAboutPag() {
    pagPortfolio.style.display = 'none'
    pagAbout.style.display = 'block'
}




/**
 *  
 * functions animations logo home
 * 
 */

function mouseDownLogo() {
    logoHome.classList.remove('movingInY')
    logoHome.classList.add('rotate')
}

function mouseUpLogo() {
    logoHome.classList.remove('rotate')
    logoHome.classList.add('movingInY')
}


/**
 *  
 * functions changes the theme
 * 
 */


function changeTheme() {
    if (changeThemeIcon.classList.contains('dark')) {
        themeLight()
    } else {
        themeDark()
    }
}

function themeLight() {
    html.classList.add('lightMode')
    changeThemeIcon.classList.remove('dark')
    changeThemeIcon.classList.add('light')
    changeThemeIcon.innerHTML = 'light_mode'
    logoImgHome.src = 'assets/images/logoWhiteTheme.png'
    //logoHeader.src = 'assets/images/logoBlackTheme.png'
}

function themeDark() {
    html.classList.remove('lightMode')
    changeThemeIcon.classList.remove('light')
    changeThemeIcon.classList.add('dark')
    changeThemeIcon.innerHTML = 'dark_mode'
    logoImgHome.src = 'assets/images/logoBlackTheme.png'
    //logoHeader.src = 'assets/images/logoWhiteTheme.png'
}





/**
 *  
 * functions show elements at scroll page
 * 
 */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')
        }else {
            entry.target.classList.add('hidden')
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach((element) => myObserver.observe(element))


/**
 *  
 * functions projects
 * 
 */


function clickCard(src) {
    window.open(`https://adriel-rocha.github.io/${src}/`)
}



function clickChevronL() {
    if(window.innerWidth >= 769) {
        container.scrollLeft -= 250
    }else {
        container.scrollLeft -= 150
    }
}

function clickChevronR() {
    if(window.innerWidth >= 769) {
        container.scrollLeft += 250
    } else{
        container.scrollLeft += 150
    }
}