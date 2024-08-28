
function encrypt() {
    let text_encrypt = document.getElementById("text_encrypt").value;


    const myArray = text_encrypt.split("");
    let size = myArray.length;
    console.log(myArray);


    let encrypted = [];

    for (let i = 0; i < size; i++) {


        if (myArray[i] == "a") {
            encrypted[i] = myArray[i].replace(/a/gi, "ai")
        } else if (myArray[i] == "e") {
            encrypted[i] = myArray[i].replace(/e/gi, "enter")
        } else if (myArray[i] == "i") {
            encrypted[i] = myArray[i].replace(/i/gi, "imes")
        } else if (myArray[i] == "o") {
            encrypted[i] = myArray[i].replace(/o/gi, "ober")
        } else if (myArray[i] == "u") {
            encrypted[i] = myArray[i].replace(/u/gi, "ufat")
        } else {
            encrypted[i] = myArray[i];
        }

    }

    let encryptedArray = encrypted.join("");

    if (document.getElementById("text_encrypt").value.length != 0) {
        document.getElementById("text_response").innerHTML = encryptedArray;
        //encrypted = document.getElementById("default").value;
        document.getElementById("default").style.display = "hidden";
        document.getElementById("response").style.display = "";
        document.getElementById("text_encrypt").value = "";

    } else {

        document.getElementById("default").style.display = "";
    }


}

function copy() {
    let response = document.getElementById("text_response").innerHTML;

    try {
        //copiado
        navigator.clipboard.writeText(response);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


function descrypt() {

    let text_encrypt = document.getElementById("text_encrypt").value;


let encrypted = text_encrypt.replace(/ai/gi, "a")
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");




    if (document.getElementById("text_encrypt").value.length != 0) {
        document.getElementById("text_response").innerHTML = encrypted;
        document.getElementById("default").style.display = "hidden";
        document.getElementById("response").style.display = "";
        document.getElementById("text_encrypt").value = "";

    } else {

        document.getElementById("default").style.display = "";
    }


}







