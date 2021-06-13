const image1 = document.querySelector('#personagem1');
const image2 = document.querySelector('#personagem2');
const image3 = document.querySelector('#personagem3');
const image4 = document.querySelector('#personagem4');

const nomePersonagem1 = document.querySelector('#nome-personagem1');
const nomePersonagem2 = document.querySelector('#nome-personagem2');
const nomePersonagem3 = document.querySelector('#nome-personagem3');
const nomePersonagem4 = document.querySelector('#nome-personagem4');

const numeroMaximoDePersonagens = 671;

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter1 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }) .then((response) => response.json()) .then((data) => {
        image1.src = data.image;
        image1.alt = 'Imagem do personagem ' + data.name;
        nomePersonagem1.innerHTML = data.name;
    })
}

getCharacter2 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }) .then((response) => response.json()) .then((data) => {
        image2.src = data.image;
        image2.alt = 'Imagem do personagem ' + data.name;
        nomePersonagem2.innerHTML = data.name;
    })
}

getCharacter3 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }) .then((response) => response.json()) .then((data) => {
        image3.src = data.image;
        image3.alt = 'Imagem do personagem ' + data.name;
        nomePersonagem3.innerHTML = data.name;
    })
}

getCharacter4 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }) .then((response) => response.json()) .then((data) => {
        image4.src = data.image;
        image4.alt = 'Imagem do personagem ' + data.name;
        nomePersonagem4.innerHTML = data.name;
    })
}

document.onload = getCharacter1();
document.onload = getCharacter2();
document.onload = getCharacter3();
document.onload = getCharacter4();