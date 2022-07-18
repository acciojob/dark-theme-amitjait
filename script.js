let main = document.getElementById('app');
let para = document.getElementById('ptag');
let swap = document.getElementById('swap');


// swap.addEventListener('click', () => {
//     main.classList = 'night';
//     swap.classList = 'button_night';
// });
swap.addEventListener('click', () => {
    if(app.classList.contains('day') && swap.classList.contains('button_day')) {
        main.classList = 'night';
        swap.classList = 'button_night';
    } else if(app.classList.contains('night') && swap.classList.contains('button_night')) {
        main.classList = 'day';
        swap.classList = 'button_day';
    }
});