/* VARIABLES GLOBALES */
var access_token = "nrATt8FULnDxKQz-oEbmRxBAM1KG6KirdwXo9yuqDYL6_-07wXaRtQZj1W6WLRSa";

$("#btn-lancer-recherche").click(function() {

    /* Recherche */
    var search = $("#recherche").val().replace(/ /g, "%20");

    /* Requête */
    $.get("https://api.genius.com/search?q=" + search + "&access_token=" + access_token, function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
        console.log(data);
    });
});






// --------- ajout de la recherche au local storage
$("#btn-favoris").click(function(){
    var tmp = $("#recherche").val();
    localStorage.setItem(tmp,tmp);
});