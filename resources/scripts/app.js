// bootstrap
import 'bootstrap';

const tech = document.querySelector("tile-icon");

const addStyle = e => {
    console.log(e)
}


tech.addEventListener("onmouseover", addStyle);