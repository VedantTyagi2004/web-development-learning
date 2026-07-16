function fibonacciGenerator (n) {
var arr= [0,1];
var yo =[0];
if (n===1){
    return yo;
}
else if (n===2){
    return arr;
}
else{
    while(arr.length<n){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
       
    }
} return arr;

}
var a = fibonacciGenerator(100);
console.log(a);


