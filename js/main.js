function openAnimatedLink(button, link) {
    navView = document.getElementById('navigation-view');

    navView.style.pointerEvents = 'auto';
    navView.style.opacity = 1;
    navView.style.top = '0px';
    navView.style.left = '0px';
    navView.style.width = '100%';
    navView.style.height = '100%';
    
    document.getElementById('navigation-icon').style.opacity = 1;

    setTimeout(function(){ 
        window.open(link, '_top');
    }, 500); 
}