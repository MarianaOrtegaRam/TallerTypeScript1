import { Serie } from "./serie.js";
import { series } from "./data.js";
console.log("Taller 1 y 2 de TypeScript");

let contenidoTabla: HTMLElement = document.getElementById("contenido")!;
let imagenCard:HTMLElement = document.getElementById("image-info")!;
let titleCard:HTMLElement = document.getElementById("title-info")!;
let textCard:HTMLElement = document.getElementById("text-info")!;
let linkCard:HTMLElement = document.getElementById("card-link")!;

mostrarContenidoTabla();
insertarPromedioTemporadas();
constuirBotones();

function constuirBotones():void{
    for (let i = 1; i <= series.length; i++){
        let serie:Serie = series[i-1];
        let button:HTMLElement = document.getElementById(`button-${i}`)!;
        button.onclick = () => {
            console.log(serie.name);
            imagenCard.setAttribute("src",serie.image_link);
            titleCard.innerText = serie.name;
            textCard.innerText = serie.description;
            linkCard.innerText = serie.link;
            linkCard.setAttribute("href", serie.link);
            linkCard.setAttribute("target","_blank");
        }
    }
}

function mostrarContenidoTabla(): void {
  let index: number = 1;
  for (let serie of series) {
    console.log(serie);
    let row: HTMLElement = document.createElement("tr");
    row.innerHTML = `
        <td>${index}</td>
        <td><button class="btn default" id="button-${index}">${serie.name}</button></td>
        <td>${serie.studio}</td>
        <td>${serie.releaseYear}</td>
        <td>${serie.seasons}</td>
        `;
    contenidoTabla.appendChild(row);
    index++;
  }
}

function obtenerPromedioTemporadas():number{
    let suma:number = 0;
    let nElementos:number = series.length;
    for(let serie of series){
        suma += serie.seasons;
    }
    let avg = suma / nElementos;
    return avg;
}

function insertarPromedioTemporadas():void{
    let avg:number = obtenerPromedioTemporadas();
    let p_promedio:HTMLElement = document.getElementById("avg-p")!;
    p_promedio.innerHTML = `Promedio de Temporadas: ${avg}`
}
