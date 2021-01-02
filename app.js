var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = 'https://api.funtranslations.com/translate/minion.json'

function getTranslationURL(text){
    return serverURL + "?" + "text" + input
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with the server! Please tryt after sometime")
}
function clickHandler(){
     var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler )