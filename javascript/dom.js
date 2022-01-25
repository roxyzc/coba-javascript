//Dom selection
// document.getElementById()
// -> element
// const cobaJudul = document.getElementById('judul');
// cobaJudul.style.color = 'blue';
// cobaJudul.style.backgroundColor = 'gray';
// cobaJudul.innerHTML = 'roxyzc';

//document.getElementsByTagName()
// -> HTMLCollection
// let p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'red';
//     p[i].innerHTML = "ini paragraf "+(i + 1); 
// }

// let h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = "3rem";

// document.getElementsByClassName()
// -> HTMLCollection
// let p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';

// document.querySelector()
// -> element
// let sectionB = document.querySelector('#b p');
// sectionB.style.color = 'green';

// let li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.color = 'orange';

// document.querySelectorAll()
// -> Node list
// let pAll = document.querySelectorAll('p');
// for(let i = 0; i < pAll.length; i++){
//     pAll[i].style.fontSize = "2.5rem";
// }

// cara untuk mempersempit node root
// const sectionB2 = document.getElementById('b');
// const pSectionB2 = sectionB2.querySelector('p');
// pSectionB2.style.color = 'white';

// Dom manipulation
// const sectionA = document.querySelector('#a');
// sectionA.style.color = 'salmon';
// sectionA.innerHTML = "Mencoba manipulation Dom";

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.removeAttribute('href');

// document.body.classList.toggle('biru-muda');

// Manipulation Node
// menggunakan node.appendChild
// buat element baru
const pBaru = document.createElement('p');
const isiPBaru = document.createTextNode('paragraf baru');
pBaru.appendChild(isiPBaru);

const a = document.getElementById('a');
a.appendChild(pBaru);

// menggunakan node.insertBefore
const liBaru = document.createElement('li');
const text = document.createTextNode('Item baru');
liBaru.appendChild(text);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// parentNode.removeChild atau replaceChild
const link = document.querySelector('section#a a');
a.removeChild(link);

const b = document.getElementById('b');
const p4 = b.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('h2 baru');
h2Baru.appendChild(textH2Baru);
b.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'salmon';
h2Baru.style.backgroundColor = 'salmon';
liBaru.style.backgroundColor = 'salmon';