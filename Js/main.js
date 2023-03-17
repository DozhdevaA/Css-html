const nav = document.querySelector('#nav');
const navbtn = document.querySelector('#nav-btn');
const navbtnimg = document.querySelector('#nav-btn-img');


navbtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navbtnimg.src = "./Img/nav-close.png";
    } else {
    navbtnimg.src = "./Img/nav.png";    

        }
    }

