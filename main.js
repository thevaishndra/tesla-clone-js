const openMenu = () =>{
    document.querySelector('aside').className = 'active';
}
const closeMenu = () =>{
    document.querySelector('aside').className = '';
}
document.getElementById('menuBtn').onclick = e =>{
    e.preventDefault();//so that we don't trigger the link direction
    openMenu();
}
document.querySelector('aside button.close').onclick = e =>{
    closeMenu();
}