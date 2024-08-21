function menuFuncion() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("responsivo");
}

window.onscroll = function() {
  headerSombra();
};

function headerSombra() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

const textoElement = document.querySelector('.texto-span');
const texto = "Dev Frontend";
let index = 0, isDeleting = false;
const typeSpeed = 150, deleteSpeed = 100, delay = 1000;

function type() {
    textoElement.textContent = texto.slice(0, index) + '|';
    if (!isDeleting) {
        index < texto.length ? index++ : isDeleting = true;
    } else {
        index > 0 ? index-- : isDeleting = false;
    }
    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
}
type();

document.addEventListener('DOMContentLoaded', function() {
  const animacaoHome = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
  });

  animacaoHome.reveal('.caixa-destaque', {});
  animacaoHome.reveal('.cartao-em-destaque', { delay: 100 });
  animacaoHome.reveal('.destaque-nome', { delay: 200 });
  animacaoHome.reveal('.info-texto', { delay: 200 });
  animacaoHome.reveal('.icones-midias-sociais', { delay: 200 });
  animacaoHome.reveal('.imagem-destaque', { delay: 300 });
});

document.addEventListener('DOMContentLoaded', function() {
const animacaoSobre = ScrollReveal({
    distance: '100px',
    duration: 2000,
    reset: true
});

animacaoSobre.reveal('.titulo', { origin: 'top' });
animacaoSobre.reveal('.sobre-info', { origin: 'left' });
animacaoSobre.reveal('.skills-box', { origin: 'right', interval: 200 });
});

document.addEventListener('DOMContentLoaded', function() {
  const animacaoPortifolio = ScrollReveal({
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      reset: true
  });

  animacaoPortifolio.reveal('.titulo', { origin: 'top' });
  animacaoPortifolio.reveal('.projeto', { interval: 200 });
});

document.addEventListener('DOMContentLoaded', function() {
const animacaoContato = ScrollReveal({
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      reset: true
  });

  animacaoContato.reveal('.titulo', { origin: 'top' });
  animacaoContato.reveal('.contato-info', { origin: 'left', interval: 200 });
  animacaoContato.reveal('.form-control', { origin: 'right', interval: 200 });
});

const menu = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    menu.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);