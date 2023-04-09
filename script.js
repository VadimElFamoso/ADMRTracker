let dep_array = [];
let converted_url_array = [];

function depNumConverter(dep_number_start, dep_number_end){
    while(dep_number_start <= dep_number_end){
        if (dep_number_start < 10){
            dep_array.push("0" + dep_number_start);
        }

        else{
            dep_array.push(dep_number_start);
        }
        dep_number_start++;
    }    
}

function URLconverter(){
    for(let i = 0 ; i < dep_array.length ; i++){
        converted_url_array.push(url = "https://www.fede" + dep_array[i] + ".admr.org/") 
    }
}

depNumConverter(1, 95);
URLconverter();

converted_url_array.forEach(element => {
    fetch(element)
    .then(r => console.log(r));
});

