const themeSwitch = document.getElementById('theme-switch');
const logo = document.getElementById('logo');
const plusBtn = document.querySelector('.tarefas-input');
const adicionarBtn = document.querySelector('.btn-adicionar');

function aplicarTema(ativar) {
    document.body.classList.toggle('darkmode', ativar);
    localStorage.setItem('darkmode', ativar ? 'active' : null);

    if (logo) {
        logo.src = ativar ? './img/logo-darkmode.svg' : './img/logo.svg';
    }

    document.querySelectorAll('.remove-button').forEach(img => {
        img.src = ativar 
            ? './img/remove-darkmode.svg' 
            : './img/remove-button.svg';
    });

    if (plusBtn) {
        plusBtn.style.backgroundImage = ativar 
            ? "url('./img/plus-darkmode.svg')" 
            : "url('./img/plus.svg')";
    }

    if (adicionarBtn) {
        adicionarBtn.style.backgroundColor = ativar 
            ? 'var(--azul-secundario)' 
            : 'var(--azul-principal)';
    }
}


aplicarTema(localStorage.getItem('darkmode') === 'active');


themeSwitch.addEventListener('click', () => {
    const darkmodeAtivo = localStorage.getItem('darkmode') === 'active';
    aplicarTema(!darkmodeAtivo);
});
