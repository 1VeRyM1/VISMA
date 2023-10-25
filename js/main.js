document.addEventListener("DOMContentLoaded", function() { // Открытие и закрытие меню-бургер.
    document.getElementById('burger').addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        document.body.classList.toggle("hidd");
    });
});

const butup = document.getElementById('upp');

function show() {
    butup.classList.remove('hiddenup')
}

function hide() {
    butup.classList.add('hiddenup')
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY < 400 ? show() : hide();
});

butup.addEventListener("click", ()=> {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
});

