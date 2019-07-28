const glass = document.querySelector('.glass__js'),
    glassCount = document.querySelector('.glass__count--js'),
    btnPrimary = document.querySelector('.btn__primary--js'),
    btnSecondary = document.querySelector('.btn__secondary--js');

let textDate = document.querySelector('.day__js'),
    today = new Date().toISOString().slice(0, 10);

let set = (key, value) => localStorage.setItem(key, value);
let get = key => localStorage.getItem(key);

if (get(today) === null) {
    set(today, glassCount.innerHTML);
} else {
    textDate.innerHTML = today;
    document.title = `${today} | hydrapp`;
    glassCount.innerHTML = get(today);
}

const addGlass = () => {
    let glassNumber = parseInt(glassCount.innerHTML) + 1;

    if (get(today) !== null) {
        if (glassNumber > 10) {
            glassNumber = 10;
            set(today, glassNumber);

        } else {
            glassCount.innerHTML = glassNumber;
            set(today, glassNumber);
        }
    }

}

const deleteGlass = () => {
    let glassNumber = parseInt(glassCount.innerHTML) - 1;

    if (get(today) !== null) {
        if (glassNumber < 0) {
            glassNumber = 0;
            set(today, glassNumber);

        } else {
            glassCount.innerHTML = glassNumber;
            set(today, glassNumber);
        }
    }
}

btnPrimary.addEventListener('click', addGlass);
btnSecondary.addEventListener('click', deleteGlass);