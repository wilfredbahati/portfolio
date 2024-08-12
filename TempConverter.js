const convertToF = document.querySelector("#convertToF");
const convertToC = document.querySelector("#convertToC");
const celsiusInput = document.querySelector("#celsius");
const fehreinheitInput = document.querySelector("#fahrenheit");
const resultDisplay= document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const inputs = document.getElementsByTagName("input");


const celsiusToFFunction =function(){
const celsius=celsiusInput.value;

if(celsius !==""){
    const fehreinheit =(celsius * 9 / 5) + 32;
    resultDisplay.innerText = `${celsius}°F is ${fehreinheit.toFixed(1)}°C`;
    celsiusInput.value=" ";
    resultDisplay.style.color="black";

}
else{
    resultDisplay.innerText="Input is required";
    resultDisplay.style.color="red";
}

}

const fehreinheitToC=function(){
    const fahrenheit=fehreinheitInput.value;

    if(fahrenheit !==""){
        const celsius=(fahrenheit - 32) * 5 / 9;
        resultDisplay.innerText = `${fahrenheit}°F is ${celsius.toFixed(1)}°C`;
        fehreinheitInput.value=""; 
        resultDisplay.style.color="black";  
    }
    else{
        resultDisplay.innerText="Input is required";
        resultDisplay.style.color="red";
    }

}


convertToF.addEventListener("click",celsiusToFFunction);
convertToC.addEventListener("click",fehreinheitToC);


celsiusInput.addEventListener("keypress",function(e)
{
    if(e.key==="Enter"){
        celsiusToFFunction() 
        
    }
     
}
)
fehreinheitInput.addEventListener("keypress",function(e)
{
 if (e.key === "Enter"){
    fehreinheitToC()
 }  
}
)
 
for(let button of buttons){
    button.style.fontFamily="Georgia";
}

for(let input of inputs){
    input.style.border="1px solid dodgerblue";
}