const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"];

let pass1 = "";
let pass2 = "";

function generatePass1() 
{
    for (let i = 0; i < characters.length; i++) 
    {
        while (pass1.length <= 15) 
        {
            pass1 += characters[Math.floor(Math.random() *characters.length)];
        }
    }

    document.querySelector(".rec1").innerHTML = pass1;
    generatePass2();
}
function generatePass2() 
{
    for (let i = 0; i < characters.length; i++) 
    {
        while (pass2.length <= 15) 
        {
            pass2 += characters[Math.floor(Math.random() *characters.length)];
        }
    }

    document.querySelector(".rec2").innerHTML = pass2;
    
}

