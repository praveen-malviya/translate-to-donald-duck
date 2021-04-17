var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#userInput");
var outputDiv = document.querySelector("#outputText");

var serverURL = "https://api.funtranslations.com/translate/dolan.json"

function errorHandler(error) {
    console.log("Error occured", error);
    alert("something went wrong with server! Try after 1 hour")
}




function clickHandler(){
    var callingapi = serverURL+"?"+"text="+userInput.value;
    fetch(callingapi)
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
    
};

btnTranslate.addEventListener("click", clickHandler);