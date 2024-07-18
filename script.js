sc = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key code: ", e.keyCode)
    if (e.keyCode == 38) {
        main = document.querySelector('.main');
        main.classList.add('animateMain');
        setTimeout(() => {
            main.classList.remove('animateMain')
        }, 700);
        gameOver.style.visibility = 'hidden';
    }

    if (e.keyCode == 39) {
        main = document.querySelector('.main');
        main_x = parseInt(window.getComputedStyle(main, null).getPropertyValue('left'));
        main.style.left = main_x + 112 + "px";
    }

    if (e.keyCode == 37) {
        main = document.querySelector('.main');
        main_x = parseInt(window.getComputedStyle(main, null).getPropertyValue('left'));
        main.style.left = (main_x - 112) + "px";
    }
}

setInterval(() => {
    main = document.querySelector('.main');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    main_x = parseInt(window.getComputedStyle(main, null).getPropertyValue('left'));
    main_y = parseInt(window.getComputedStyle(main, null).getPropertyValue('top'));

    obs_x = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    obs_y = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(main_x - obs_x);
    offsetY = Math.abs(main_y - obs_y);

    console.log(offsetX, offsetY);

    if (offsetX < 129 && offsetY < 125) {
        gameOver.style.visibility = 'visible';
        gameOver.innerHTML = "GAME OVER!!!";
        obstacle.classList.remove('aniObs')
    }
    else if (offsetX < 190 && cross) {
        sc += 1;
        updateScore(sc);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = aniDuration - 0.1;
            obstacle.style.animationDuration = newDuration + 's';
        }, 1000)

    }
}, 100);

function updateScore(sc) {
    score.innerHTML = "Your Score: " + sc;
}