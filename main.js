let blocks = document.querySelectorAll('.block');
let btn = document.querySelector('#btn');

let c;
let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function cL(){
    for (let i = 0; i < 6; i++){
        rnd1 = Math.floor(Math.random() * color.length);
        rnd2 = Math.floor(Math.random() * color.length);
        rnd3 = Math.floor(Math.random() * color.length);
        rnd4 = Math.floor(Math.random() * color.length);
        rnd5 = Math.floor(Math.random() * color.length);
        rnd6 = Math.floor(Math.random() * color.length);
        c = '#'+color[rnd1]+color[rnd2]+color[rnd3]+color[rnd4]+color[rnd5]+color[rnd6];
        blocks[i].style.backgroundColor = c;
        blocks[i].style.transition = '2s';
    }

}

btn.addEventListener('click', cL);