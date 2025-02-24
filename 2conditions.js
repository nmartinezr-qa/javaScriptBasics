const flag = true;

if (flag) { // !flag is the same as flag == false
   // console.log("The flag is true");
}else{
   // console.log("The flag is false");
}

let index = 0;
console.log("While loop");
while (index < 10) {
   // console.log(`The flag is true: ${index}`);
    index++;
}

index = 0;
console.log("Do-While loop");
do{
   // console.log(`The flag is true: ${index}`);
    index++;
}while(index < 10);

console.log("For loop");
for (let i = 0; i < 10; i++) {
   // console.log(`The flag is true: ${i}`);
}

if(1 == true){
   // console.log("The flag is true");
}
if(1 === true){ // This is false
   // console.log("The flag is true");
}

