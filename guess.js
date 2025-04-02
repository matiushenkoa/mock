const PICKED_NUM = 99;

const guess = (num) => {
    if (num === PICKED_NUM) {
        return 0;
    }

    if (num > PICKED_NUM) {
        return -1;
    }

    if (num < PICKED_NUM) {
        return 1;
    }
}

window.guess = guess;
