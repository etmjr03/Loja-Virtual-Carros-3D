function clickMenu() {
    if(menu.style.display == 'inline') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'inline'
    }
}

function clickMobile() {
    let menuMobile = document.querySelector('.mobile')

    menuMobile.classList.toggle('active')
}
