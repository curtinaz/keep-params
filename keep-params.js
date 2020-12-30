let param = location.search.slice(1);
if (param == "") {
    let hasparam = false;
} else {

    var qtd_links = document.querySelectorAll("a").length;
    var changing = 0;

    for (changing = 0; changing <= qtd_links; changing++) {

        var checkout_url = document.querySelectorAll("a")[changing].href;

        if (checkout_url.split('?')[1] === undefined) {
            document.querySelectorAll("a")[changing].href = checkout_url + "?" + param;
        } else {
            document.querySelectorAll("a")[changing].href = checkout_url + "&" + param;
        }

    }

}