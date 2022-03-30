var access_token = "nrATt8FULnDxKQz-oEbmRxBAM1KG6KirdwXo9yuqDYL6_-07 wXaRtQZj1W6WLRSa";

var search = "PNL";

$.get("https://api.genius.com/search?q=" + search + "&access_token=" + access_token, function(data, status) {
    alert("Data: " + data + "\nStatus: " + status);
});