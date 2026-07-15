var output = [];
var count =0;
function fizzbuzz(){
    count =count +1;
    if(count%3===0 && count%5!==0){
        output.push("Fizz");
    }
    else if(count%5===0 && count%3!==0){
    output.push("Buzz");}
    else if(count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else{
        output.push(count); 
    }
   
    console.log(output);
}
//testing
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();