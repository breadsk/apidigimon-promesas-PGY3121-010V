

const getDigimones = async() => {

    try{

        const digimones = await fetch("https://digimon-api.vercel.app/api/digimon");

        const data = await digimones.json();

        return data;

    }catch(error){
        console.log(`El error es: ${error}`);
    }

}

getDigimones()
    .then((digimones)=> {
        console.log(digimones);
    })
    .catch((error)=> {
        console.log(`Èl error es: ${error}`);
    })