
const btn = document.querySelector('button');
const ulList = document.querySelector('ul');

let numberLi = 1;

const addList = function () {
    // console.log('działa');

    const liElement = document.createElement('li');
    liElement.textContent = numberLi;

    if ((numberLi % 3) == 0) {
        // liElement.style.fontSize = '20px';
         liElement.classList.add('big');
    }

    // console.log(liElement);
    document.body.appendChild(liElement);
    numberLi += 2;
}
btn.addEventListener('click', addList);
