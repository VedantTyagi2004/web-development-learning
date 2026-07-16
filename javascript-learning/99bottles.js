console.log("program started");
function beer(){
    var a = 99;
    while (a>1){
        console.log(a +" bottles of beer on the wall, "+ a+" bottles of beer");
        console.log("Take one down and pass it around, "+(a-1)+" bottles of beer on the wall ");
        a=a-1
    }
    if(a===1){
        console.log("1 bottle of beer on the wall, 1 bottle of beer");
        console.log ("Take one down and pass it around, no more bottles of beer on the wall");
        console.log("No more bottles of beer on the wall, no more bottles of beer");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall");

    }
}
beer();