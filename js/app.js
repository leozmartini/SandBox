function alterarStatus(gameIndex) {
    const element = document.getElementById(`game-${gameIndex}`);

    const img = element.querySelector('.dashboard__item__img')
    const btn = element.querySelector('.dashboard__item__button');

    if (btn.textContent == 'Alugar') {
        btn.classList.add('dashboard__item__button--return');
        btn.innerText = 'Devolver'
        img.classList.add('dashboard__item__img--rented')

    } else if (btn.textContent == 'Devolver') {
        btn.classList.remove('dashboard__item__button--return');
        btn.innerText = 'Alugar'

        img.classList.remove('dashboard__item__img--rented')
    } else {
        alert('Erro desconhecido, contate um administrador.')
    }





}