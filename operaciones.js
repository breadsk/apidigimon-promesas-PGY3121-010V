export const crearCards = (digimones = []) => {
    let digimonesRow = document.getElementById("digimonesRow");

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

            cardBody.appendChild(title);
            cardBody.appendChild(level);
            cardBody.appendChild(btnVer);

            card.appendChild(img);
            card.appendChild(cardBody);

            divCol.appendChild(card);

            digimonesRow.appendChild(divCol);

        })
}