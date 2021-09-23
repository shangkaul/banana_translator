var translate=document.querySelector("#translate_btn");

var inp=document.querySelector("#input_txt");
var otp=document.querySelector("#output_txt");


var translateEventHandler= translate.addEventListener('click',()=>{
    console.log("translate button was clicked!")
    
    var text=inp.value;


    const uri="https://api.funtranslations.com/translate/minion.json"
    
    var final_uri=uri+"?text="+encodeURI(text)


    fetch(final_uri)
    .then(response => response.json())
        .then(json => {
            console.log(json)
            otp.innerText = json.contents.translated;
        })
    .catch((err)=>{
       console.log("Error aa gya: " +err)
    })


});


