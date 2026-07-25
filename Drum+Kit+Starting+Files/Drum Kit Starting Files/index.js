var a = document.querySelectorAll(".drum"); 
for (var i =0;i<a.length;i++){  
    a[i].addEventListener("click",handleClick);
   
    }

function handleClick(){
   
    var ButtonInnerHTML= this.innerHTML;
    buttonAnimation(ButtonInnerHTML);
    switch (ButtonInnerHTML) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();    
            break;
    
        default:
            break;
    }

    
}
document.addEventListener("keydown",function(event){
    if (event.key==="w"){
        var audio = new Audio("./sounds/crash.mp3");
            audio.play();
    }
    // alert("Key was pressed");
    else if(event.key=="a"){
        var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
    }
    else if(event.key==="s"){
        var audio = new Audio("./sounds/snare.mp3");
            audio.play();
    }
    else if(event.key==="d"){
        var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
    }
    else if(event.key==="j"){
        var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
    }
    else if(event.key==="k"){
        var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
    }
    else if(event.key==="l"){
        var audio = new Audio("./sounds/tom-4.mp3");
            audio.play(); 
    }
buttonAnimation(event.key);
});
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
   activeButton.classList.remove("pressed");
   },100);

}