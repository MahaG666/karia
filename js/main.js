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
function initMap(){
    var location = {lat: -25.363, lng: 131.044},
        map = new google.maps.Map(document.getElementById('map'),{
            zoom : 4,
            center : location
        });
    var marker = new google.maps.Marker({
        position : location,
        map : map
    });
    }
/*function addQuestion(){
    document.getElementsByClassName('chat-content')[0].innerHTML += '<div class="chat-forward">' + document.getElementsByClassName('chat-text')[0].value + '</div>';
    document.getElementsByClassName('chat-text').val(' ');
}*/
