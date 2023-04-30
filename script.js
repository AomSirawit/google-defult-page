let query = document.querySelector('.query');
let searchBtn = document.querySelector('.search-btn');

searchBtn.onclick = function(){
    let url = 'https://www.google.com/search?q='+query.value;
    window.open(url);
}
let time = document.getElementById("current-time");

setInterval(() =>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
})