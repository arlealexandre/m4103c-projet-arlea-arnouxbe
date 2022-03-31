//*********************************************************************************************************************//
// VARIABLES GLOBALES                                   
//*********************************************************************************************************************//

var access_token = "nrATt8FULnDxKQz-oEbmRxBAM1KG6KirdwXo9yuqDYL6_-07wXaRtQZj1W6WLRSa";
var bloc_resultats = $("#bloc-resultats");
var nb_resultats = $("#nb_resultats");

//*********************************************************************************************************************//
// UTILITAIRES                                   
//*********************************************************************************************************************//

// Nom d'un artiste   : data.response.hits[0].result.artist_names
// Titre d'un morceau : data.response.hits[0].result.title
// Cover d'un morceau : data.response.hits[0].result.header_image_url

//*********************************************************************************************************************//
// RECHERCHE                                   
//*********************************************************************************************************************//

function recherche() {

    // Les espaces sont remplacés par '%20' pour la requete
    var search = $("#recherche").val().replace(/ /g, "%20");

    // On efface le contenu des div dont le contenu change en fonction du résultat d'une requête
    bloc_resultats.empty();
    nb_resultats.empty();

    /* Requête */
    $.get("https://api.genius.com/search?q=" + search + "&access_token=" + access_token, function(data) {

        var resultats = data.response.hits;
        var nb_resultats_req = resultats.length;

        if (nb_resultats_req == 0) { // Si aucun résultat trouvé
            nb_resultats.append("<p>( &empty; Aucun résultat trouvé )</p>")
        } else { // Sinon
            nb_resultats.append("<p>" + nb_resultats_req + " résultat(s) trouvé(s)</p>")

            resultats.forEach(resultat => {
                bloc_resultats.append("<p><strong>" + resultat.result.artist_names + "</strong> - " + resultat.result.title + "</p>")
            });
        }
    });
}

/* Recherche lancée quand le bouton est cliqué */
$("#btn-lancer-recherche").click(function() { recherche(); });

/* Recherche lancée quand la touche entrer est appuyée */
$(document).on('keypress', function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') { recherche(); }
});

//*********************************************************************************************************************//
// GESTION DES FAVORIS                                   
//*********************************************************************************************************************//

$("#btn-favoris").click(function() {
    var tmp = $("#recherche").val();
    localStorage.setItem(tmp, tmp);
});