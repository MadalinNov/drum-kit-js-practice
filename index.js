var drum = document.querySelectorAll(".drum");

//mouse eventlistener

for(var i = 0; i<drum.length;i++){
  drum[i].addEventListener("click", function(){
      var buttonInnerHTML=this.innerHTML;
      keyCheck(buttonInnerHTML);
      btnAnimation(buttonInnerHTML);
    }

  );
}

//Keyboard eventlistener
document.addEventListener("keydown", function(event){
  keyCheck(event.key);
  btnAnimation(event.key);
});


//Sounds

function keyCheck(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/violin.wav");
      tom1.play();
      break;
      case "a":
      var tom2 = new Audio("sounds/violin-2.wav");
      tom2.play();
      break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "j":
        var snare = new Audio("sounds/snare.wav");
        snare.play();
        break;
        case "k":
          var crash = new Audio("sounds/snap.wav");
          crash.play();
          break;
          case "l":
          var kickBass = new Audio("sounds/kick-bass.wav");
          kickBass.play();
          break;
    default:
}
}

//Buttone Animation
function btnAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
      setTimeout(function(){
          activeButton.classList.remove("pressed");
        }, 100);
}
