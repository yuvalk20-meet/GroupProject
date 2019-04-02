$(document).ready(function() {

    function getQueryVariable(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }

    let name  = "My name is: " + getQueryVariable("name");
    let age  = "Age: " + getQueryVariable("age");
    let spi  = "Spiecie: " + getQueryVariable("whatami");
    let gender = "Gender: " + getQueryVariable("gender");
    let favfood = "My favourite food: " + getQueryVariable("favfood");
    let hobbies = "My Hobbies: " + getQueryVariable("hobbies");
    let funfact = "Fun Fact About Me: " + getQueryVariable("funfact");
    let image =  getQueryVariable("image");

    $("#name").text(name);
    $("#specie").text(spi);
    $("#age").text(age);
    $("#gender").text(gender);
    $("#hobbies").text(hobbies);
    $("#favfood").text(favfood);
    $("#funfact").text(funfact);




    alert(name);


});