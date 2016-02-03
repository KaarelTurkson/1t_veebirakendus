
//ootame kuni leht on laetud


window.onload =function(){

  //saan kätte väärtused

  var cm = document.getElementById('id');
  var inch = document.getElementById('inch');

  //lisan nuppudele kuularid
  document.getElementById('to_inch').addEventListener('click', convertToInch);
  document.getElementById('to_cm').addEventListener('click', function(){
    cm.value = inch.value*2.54;
  });
};



function convertToInch(){

  inch.value = cm.value/2.54;
}
