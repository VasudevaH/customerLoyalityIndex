var counter = 1;
var limit = 3;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.setAttribute("id", counter);
          newdiv.innerHTML = "Entry " + (counter + 1) + " <br> <input type='text' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}
function removeInput(divName,div){
    if (counter == 0)  {
         alert("You have reached the limit of removing" + counter + " inputs");
    }
    else {
            var myCoolDiv = document.getElementById(div)
         document.getElementById(divName).removeChild(myCoolDiv);
         counter--;
    }
}