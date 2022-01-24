//Dom selection
// document.getElementById()
// -> element
const cobaJudul = document.getElementById('judul');
cobaJudul.style.color = 'blue';
cobaJudul.style.backgroundColor = 'gray';
cobaJudul.innerHTML = 'roxyzc';

//document.getElementsByTagName()
// -> HTMLCollection
let p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'red';
    p[i].innerHTML = "ini paragraf "+(i + 1); 
}

let h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = "3rem";

// document.getElementsByClassName()
// -> HTMLCollection
let p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';

// document.querySelector()
// -> element
let selectorB = document.querySelector('#b p');
selectorB.style.color = 'green';

let li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.color = 'orange';

// document.querySelectorAll()
// -> Node list
let pAll = document.querySelectorAll('p');
for(let i = 0; i < pAll.length; i++){
    pAll[i].style.fontSize = "2.5rem";
}