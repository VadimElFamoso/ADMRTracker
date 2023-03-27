let websites = [];

let num_dep_min = 1;
let num_dep_max = 95;

//Applies conventional numerotation for french departments : 
function num_dep_converter(num, end) {
    if(num < end){
        let num_dep_min = 1;
        let num_str = num.toString();
        let result = "0" + num_str;
        return result;
    }
    else{
        return num;
    }
}

//Builds an url for each departemental federation :
function admrUrlBuilder(dep_num){
    if(dep_num < 10){
        let url = "https://www.fede" + num_dep_converter(1, 10) + ".admr.org";
        websites.push(url);
        console.log(url);
    }
    else{
        let url = "https://www.fede" + dep_num + ".admr.org";
        websites.push(url);
        console.log(url);
        return url;    
    }
}

for(num_dep_min ; num_dep_min <= num_dep_max ; num_dep_min++){
    admrUrlBuilder(num_dep_min);
}


//Requête :

    


