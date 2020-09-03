var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{
    var stringFirstName = prompt("Pop Quiz! What's the Name of your Favorite Son?!?");
    if (!isNaN(stringFirstName)) {
        alert("Hope this makes you smile, love you lots momma, feel better!");
    } else
    {
        alert("Hello "+ stringFirstName +" is Correct! Now put a Number in Instead to get the Super Secret Message");  
    }
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}