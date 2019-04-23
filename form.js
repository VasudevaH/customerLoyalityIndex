var counter=0;
var _5starProportion=0;
function addPartiton(divName){
        var name=divName+"check";
        var checkBox = document.getElementById(name);
        if (checkBox.checked == true){
            var newdiv = document.createElement('div');
            newdiv.setAttribute("id", divName+"partition");
            // newdiv.innerHTML = 'Importance/weightage on a scale of 1 to 10<input type="number" min="0" max="10"><ul><li>5starProportion<input type="number" name="5"></li><li>4starProportion<input type="number" name="4"></li><li>3starProportion<input type="number" name="3"></li><li>2starProportion<input type="number" name="2"></li><li>1starProportion<input type="number" name="1"></li></ul>';
            newdiv.innerHTML = `
            Importance/weightage on a scale of 1 to 10<input type="number" min="0" max="10">
            <ul>
            <li>5starProportion<input type="range" min="0" max="100" step="1" name="5"></li>
            <li>4starProportion<input type="range" min="0" max="100" step="1" name="4"></li>
            <li>3starProportion<input type="range" min="0" max="100" step="1" name="3"></li>
            <li>2starProportion<input type="range" min="0" max="100" step="1" name="2"></li>
            <li>1starProportion<input type="range" min="0" max="100" step="1" name="1"></li>
            </ul>
            `
            document.getElementById(divName).appendChild(newdiv);
            counter++;
        } else {
            var myCoolDiv = document.getElementById(divName+"partition")
            document.getElementById(divName).removeChild(myCoolDiv);
        }
       
    
}