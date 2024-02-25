(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            updateLanguageHash(button.dataset.id)
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function getHash()
{
    hash = window.location.hash.substring(1)
    if(hash=="")
        hash='home'
    return hash
}

function updateLanguageHash(hash)
{
    if(hash == 'home')
        document.getElementsByClassName('language-btn')[0].getElementsByTagName('a')[0].href = document.getElementsByClassName('language-btn')[0].getElementsByTagName('a')[0].href.split('#')[0] 
    else
        document.getElementsByClassName('language-btn')[0].getElementsByTagName('a')[0].href = document.getElementsByClassName('language-btn')[0].getElementsByTagName('a')[0].href.split('#')[0] + '#' + hash
}
window.onload = (event) => {
    hash = getHash()
    updateLanguageHash(hash)

    document.querySelector(".active-btn").classList.remove("active-btn");
    document.querySelector("[data-id="+hash+"]").classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");
  };