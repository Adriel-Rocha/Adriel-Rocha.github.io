const pagAbout = document.querySelector('.about')
const btnAbout = document.querySelector('.btnAbout')
const pagPortfolio = document.querySelector('.pagPortfolio')
const btnPortfolio = document.querySelector('.btnPortfolio')
const logoHome = document.querySelector('.homeLogo')
const changeThemeIcon = document.querySelector('.themeIcon')
const html = document.querySelector('html')
const logoImgHome = document.querySelector('.logoImgHome')
const logoHeader = document.querySelector('.logoHeader')

/**
 *  
 * click menu button functions of animatons
 * 
 */

function clickBtnPortifolio() {
    if (!btnPortfolio.classList.contains('pagSelected')) {
        btnPortfolio.classList.add('pagSelected')
        btnAbout.classList.remove('pagSelected')
        pagPortfolio.classList.remove('animationHidePortfolio')
        pagPortfolio.classList.add('animationShowPortfolio')
        pagAbout.classList.remove('animationShowAbout')
        pagAbout.classList.add('animationHideAbout')
    } else {
        pagPortfolio.classList.add('animationShake')
        setTimeout(() => {
            pagPortfolio.classList.remove('animationShake')
            pagPortfolio.classList.remove('animationShowPortfolio')
        }, 2000)
    }
}


function clickBtnAbout() {
    if (!btnAbout.classList.contains('pagSelected')) {
        btnAbout.classList.add('pagSelected')
        btnPortfolio.classList.remove('pagSelected')
        pagAbout.classList.remove('animationHideAbout')
        pagAbout.classList.add('animationShowAbout')
        pagPortfolio.classList.remove('animationShowPortfolio')
        pagPortfolio.classList.add('animationHidePortfolio')
    } else {
        pagAbout.classList.add('animationShake')
        setTimeout(() => {
            pagAbout.classList.remove('animationShake')
            pagAbout.classList.remove('animationShowAbout')
        }, 500)
    }
}




pagAbout.onanimationend = () => {
    if (btnPortfolio.classList.contains('pagSelected')) {
        pagAbout.style.display = 'none'
        pagPortfolio.style.display = 'block'
        console.log('yes')
    }
}


pagPortfolio.onanimationend = () => {
    if (btnAbout.classList.contains('pagSelected')) {
        pagPortfolio.style.display = 'none'
        pagAbout.style.display = 'block'
        console.log('yes')
    }
}







function mouseDownLogo() {
    logoHome.classList.remove('movingInY')
    logoHome.classList.add('rotate')
}

function mouseUpLogo() {
    logoHome.classList.remove('rotate')
    logoHome.classList.add('movingInY')
}




function changeTheme() {
    if(changeThemeIcon.classList.contains('dark')) {
        html.classList.add('lightMode')
        changeThemeIcon.classList.remove('dark')
        changeThemeIcon.classList.add('light')
        changeThemeIcon.innerHTML = 'light_mode'
        logoImgHome.src = 'images/logoWhiteTheme.png'
        logoHeader.src = 'images/logoBlackTheme.png'
        
    }else {
        html.classList.remove('lightMode')
        changeThemeIcon.classList.remove('light')
        changeThemeIcon.classList.add('dark')
        changeThemeIcon.innerHTML = 'dark_mode'
        logoImgHome.src = 'images/logoBlackTheme.png'
        logoHeader.src = 'images/logoWhiteTheme.png'
    }
}