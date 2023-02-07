var slideIndex = 1;
showDivs(slideIndex);



function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("btn");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex - 1].style.display = "grid";
}


document.getElementById('hb-menu-btn').addEventListener('click', function() {
    document.getElementById('hb-menu-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'inline';
    document.querySelector('.nav-list').style.display = 'flex';
});
document.getElementById('close-menu-btn').addEventListener('click', function() {
    document.getElementById('hb-menu-btn').style.display = 'inline';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.querySelector('.nav-list').style.display = 'none';
});