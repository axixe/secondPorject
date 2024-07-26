'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        'Алфавит'
    ]
};

const adWrapper = document.querySelector('.promo__adv'),
      ads = adWrapper.querySelectorAll('img'),
      bg = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');

document.querySelector('button').addEventListener('click', (e) => {
    let inputValue = document.querySelector('.adding__input').value;
    
    e.preventDefault();

    if (inputValue.length > 20) {
        inputValue = `${inputValue.substr(0, 20)}...`;
    }

    movieDB.movies.push(inputValue);
    reloadMovieList();
});

ads.forEach(item => {
    item.remove();
})

document.querySelector('.promo__genre').textContent = 'ДРАМА';

bg.style.background = 'url("../img/bg.jpg")';

reloadMovieList();



function reloadMovieList() {
    movieList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
        </li>
        `;
    })

    if (document.querySelector('input[type="checkbox"]').checked) {
        console.log('Добавляем любимый фильм!');
    }

    document.querySelectorAll('.delete').forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        movieDB.movies.splice(i,1);
        reloadMovieList();
    });
})
}