let websites = [];

let num_dep_min = 1;
let num_dep_max = 95;

function num_dep_converter(num, end) {
    if(num < end){
        let num_str = num.toString();
        let result = "0" + num_str;
        return result;
    }
    else{
        return num;
    }
}

function admrUrlBuilder(dep_num){
    let url = "https://www.fede" + dep_num + ".admr.org";
    websites.push(url);
    console.log(websites);
    return url;
}



websites.forEach(element => {
    let request = new XMLHttpRequest();
    for(let i = num_dep_min ; i<=num_dep_max ; i++){
        request.open("GET", admrUrlBuilder(num_dep_converter(i, 10)), true);

        console.log("test");
        //On vérifie si la page a bien chargé : 
        if((request.readyState === 4) && (request.status = 0)){
            console.log("Requête réussie");
        }
        else{
            console.log("La requête a échoué.");
        }
    }
});
    


