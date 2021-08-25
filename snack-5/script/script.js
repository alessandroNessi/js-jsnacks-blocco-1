function calculate(){
    var array=[];
    var userInput;
    document.getElementById("results__output").innerHTML ="";
    for(var i=0; i<document.getElementsByClassName("input-group-sm").length; i++){
        userInput=parseInt(document.getElementById("inputGroup"+ (i+1)).value);
        if(!(isNaN(userInput)) && userInput%2!=0){
            array.push(userInput);
            document.getElementById("results__output").innerHTML += userInput;
        }
    }
}