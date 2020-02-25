// bootstrap
import 'bootstrap';

const nav = document.querySelector("#navbar-hidd");

const addStyle = e => {
    if(e.offsetTop > 10){
        nav.classList.remove("d-none")
    }
}

window.addEventListener("scroll", addStyle);