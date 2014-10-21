(function init() {
    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", buttonClicked);
})();

function buttonClicked(e) {
    e.preventDefault();
    var fname = document.getElementById("firstname"),
        lname = document.getElementById("lastname"),
        age = document.getElementById("age"),
        image = document.getElementById("image"),
        htmlBuilder,
        section = document.getElementsByTagName("section")[0];

    if(typeof age !== 'number') return;

    htmlBuilder = '<figure data-age="' + age.value + '"><img src="' + image.value + '" alt= "person"/><figcaption>' + fname.value + ' ' + lastname.value + '</figcaption></figure>';


    section.innerHTML += htmlBuilder;

    checkAge();
}

function checkAge() {
    var el = document.querySelector("figure:last-child"), age = el.getAttribute("data-age");

    if(age < 18) {
        el.setAttribute("class", "young");
    } else {
        el.setAttribute("class", "old");
    }
}
