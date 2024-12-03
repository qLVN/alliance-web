window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.documentElement.style.setProperty('--headerHeight', '60px');
    } else {
      document.documentElement.style.setProperty('--headerHeight', '80px');
    }
});

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
        navView.removeAttribute('style');
        
        document.getElementById('navigation-icon').style.opacity = 0;

        window.open(link, '_top');
    }, 500); 
}

function openLink(page, where) {
  if(where == "here") {
      window.open(page, '_top');
  }
  else if(where == "newpage") {
      window.open(page, '_blank');
  }
}

displayedGroup = null;
tabsOrder = ['publications', 'team'];

function toggleHeaderDropdown(contentName) { //not the cleanest
  dropdown = document.getElementById('header-dropdown');

  if(contentName === null || contentName == displayedGroup) { //contentName = null means closing, contentName == displayedGroup means click on the opened tab, so closing.
    //dropdown.style.opacity = 0;
    dropdown.style.pointerEvents = 'none';
    dropdown.classList.remove('fadein');

    document.getElementById(displayedGroup + '-dropdown').style.opacity = 0;
    document.getElementById(displayedGroup + '-dropdown').style.pointerEvents = 'none';
    document.getElementById(displayedGroup + '-dropdown').classList.remove('animin-right');
    document.getElementById(displayedGroup + '-dropdown').classList.remove('animin-left');

    displayedGroup = null;

    return;
  }

  fromRight = tabsOrder.indexOf(contentName) > tabsOrder.indexOf(displayedGroup); //new tab comes from the right

  if(dropdown.style.pointerEvents != 'none') { //the dropdown was already opened on another tab, need to hide it then show the new one
    //document.getElementById(displayedGroup + '-dropdown').style.opacity = 0;

    document.getElementById(displayedGroup + '-dropdown').removeAttribute('style');
    document.getElementById(displayedGroup + '-dropdown').style.pointerEvents = 'none';
    document.getElementById(displayedGroup + '-dropdown').classList.remove('animin-right');
    document.getElementById(displayedGroup + '-dropdown').classList.remove('animin-left');

    if(fromRight) {
      document.getElementById(displayedGroup + '-dropdown').classList.add('animout-left');
    } else {
      document.getElementById(displayedGroup + '-dropdown').classList.add('animout-right');
    }
  } else {
    fromRight = null;
  }

  displayedGroup = contentName;

  document.getElementById(displayedGroup + '-dropdown').classList.remove('animout-right');
  document.getElementById(displayedGroup + '-dropdown').classList.remove('animout-left');

  //dropdown.style.opacity = 1;
  dropdown.classList.add('fadein');
  dropdown.style.pointerEvents = 'all';
    
  // document.getElementById(contentName + '-dropdown').style.opacity = 1;
  if(fromRight === null) {
    document.getElementById(contentName + '-dropdown').style.opacity = 1
  }
  else if(fromRight) {
    document.getElementById(contentName + '-dropdown').classList.add('animin-right');
  } else {
    document.getElementById(contentName + '-dropdown').classList.add('animin-left');
  }
  document.getElementById(contentName + '-dropdown').style.pointerEvents = 'all';
}