import {data} from '../data/data.js'
   
const items =document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment =document.createDocumentFragment();
let like ={};

document.addEventListener('DOMContentLoaded', ()=>{loadData(data)})


const loadData = data =>{
    data.forEach(personajes =>{
        const {id, name,image} =personajes
        templateCard.querySelector('h5').textcontent =name;
        templateCard.queryselector('img').setAttribute('src',image );
        templateCard.querySelector('.btn-dark').dataset.id = id;

        const clone =templateCard.cloneNode(true)   
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)
}