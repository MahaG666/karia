var inputSearch = document.getElementById('in-search'),
    menuIcon = document.getElementById('m-icon');
inputSearch.onfocus = function(){
    'use strict';
    inputSearch.setAttribute('data-placeholder', this.getAttribute('placeholder'));
    inputSearch.setAttribute('placeholder', '');
}
inputSearch.onblur = function(){
    'use strict';
    inputSearch.setAttribute('placeholder', this.getAttribute('data-placeholder'));
    inputSearch.setAttribute('data-placeholder', '');
}
menuIcon.onclick = function (){
    this.classList.toggle('change');    
}

