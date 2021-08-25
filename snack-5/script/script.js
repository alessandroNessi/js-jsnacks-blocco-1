var array=[];
var userInput;
for(var i=0; i<6; i++){
    userInput=prompt("inserisci un numero");
    if(userInput%2!=0){
        array.push(userInput);
    }
}
console.log(array);