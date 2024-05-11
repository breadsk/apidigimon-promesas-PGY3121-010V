export const getDigimons = async() => {

    return new Promise(( resolve , reject )=> {

        fetch("https://digimon-api.vercel.app/api/digimon")
            .then((response)=> {
                
                if(!response.ok){
                    throw new Error(`Error`);
                }

                return response.json();
            })
            .then((data)=> {
                resolve(data);
            })
            .catch(( error )=> {
                reject(error);
            })
    });
}