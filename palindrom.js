const readline = require('readline-sync')
let a = "madam";
var b= "";

for(var i=a.length-1; i>=0; i--){
    b=b+a[i];
}
// console.log(b);
if(a==b)
{
    console.log("Yes");
}
else{
    console.log("No");
}