let isOpen = false
// const closeAll = () => {
//     const modal = document.getElementsByClassName('modal')
//     for (let i = 0; i < modal.length; i++) {
//         modal[i].style.display = 'none'
//     }
// }
const openModal = e => {
    // closeAll()
    const modal = document.getElementById(e.title)
    if (modal.style.display != 'block'){
        document.getElementsByTagName('body')[0].style.background = 'rgba(0, 0, 0, 0.5)'
        modal.style.display = 'block'
        isOpen = true
    }
    else {
        modal.style.display = 'none'
        document.getElementsByTagName('body')[0].style.background = 'transparent'
    }
}