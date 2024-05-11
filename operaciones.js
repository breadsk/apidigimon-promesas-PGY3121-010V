
let digimonesRow = document.getElementById("digimonesRow");

let cargaPrimera = false;

const enviarDatos = (name , img , level) => {
    
    //Obtengo ruta del archivo
    const rutaArchivoHTML = "../personaje.html";

    fetch(rutaArchivoHTML)
        .then((response) => {
            return response.text()
        })
        .then((html)=> {


            const parser = new DOMParser();

            const doc = parser.parseFromString(html,"text/html");

            const imagePage = doc.getElementById("imagePage");
            imagePage.src = img;
            imagePage.alt = `nombre de la imagen ${name}`;

            const namePage = doc.getElementById("namePage");
            namePage.textContent = `Nombre : ${name}`;

            const levelPage = doc.getElementById("levelPage");
            levelPage.textContent = `Nivel : ${level}`;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);

            digimonesRow.innerHTML = nuevoHTML;
            //document.body.innerHTML = nuevoHTML;

        });

}


export const crearCards = (digimones = []) => {
    

        localStorage.setItem("digimones",JSON.stringify(digimones));

        if(cargaPrimera){
            digimones.map(( digimon )=> {
                const { name , img : image , level: nivel } = digimon;
                
                const divCol = document.createElement("div");
                divCol.classList.add("col-xl-3");
                divCol.classList.add("col-lg-3");
                divCol.classList.add("col-md-3");
                divCol.classList.add("col-sm-12");
                divCol.classList.add("col-xs-12");
                divCol.classList.add("mt-2");
                divCol.classList.add("mb-2");
    
                const card = document.createElement("div");
                card.classList.add("card");
    
                const img = document.createElement("img");
                img.src = image;
                img.alt = `Imagen de ${name}`;
                img.classList.add("card-img-top");
    
                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
    
                const title = document.createElement("h5");
                title.classList.add("card-title");
                title.textContent = `Nombre : ${name}`;
    
                const level = document.createElement("p");
                level.textContent = `Nivel ${nivel}`;
    
                const btnVer = document.createElement("button");
                btnVer.classList.add("btn","btn-warning");
                btnVer.textContent = "Ver detalles";
                btnVer.addEventListener("click",()=> {
                    enviarDatos(name ,image ,nivel);
                })
    
                cardBody.appendChild(title);
                cardBody.appendChild(level);
                cardBody.appendChild(btnVer);
    
                card.appendChild(img);
                card.appendChild(cardBody);
    
                divCol.appendChild(card);
    
                digimonesRow.appendChild(divCol);
                cargaPrimera = true;
            })
            
        }else{
            console.log("Viene del else");
            let data = localStorage.getItem("digimones");
            JSON.parse(data);
            data.map(( digimon )=> {
                const { name , img : image , level: nivel } = digimon;
                
                const divCol = document.createElement("div");
                divCol.classList.add("col-xl-3");
                divCol.classList.add("col-lg-3");
                divCol.classList.add("col-md-3");
                divCol.classList.add("col-sm-12");
                divCol.classList.add("col-xs-12");
                divCol.classList.add("mt-2");
                divCol.classList.add("mb-2");
    
                const card = document.createElement("div");
                card.classList.add("card");
    
                const img = document.createElement("img");
                img.src = image;
                img.alt = `Imagen de ${name}`;
                img.classList.add("card-img-top");
    
                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
    
                const title = document.createElement("h5");
                title.classList.add("card-title");
                title.textContent = `Nombre : ${name}`;
    
                const level = document.createElement("p");
                level.textContent = `Nivel ${nivel}`;
    
                const btnVer = document.createElement("button");
                btnVer.classList.add("btn","btn-warning");
                btnVer.textContent = "Ver detalles";
                btnVer.addEventListener("click",()=> {
                    enviarDatos(name ,image ,nivel);
                })
    
                cardBody.appendChild(title);
                cardBody.appendChild(level);
                cardBody.appendChild(btnVer);
    
                card.appendChild(img);
                card.appendChild(cardBody);
    
                divCol.appendChild(card);
    
                digimonesRow.appendChild(divCol);
                cargaPrimera = true;
            })
        }

        
}