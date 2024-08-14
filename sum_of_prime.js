function summ(number){

primesum=0;
for(num of number){
    if(num>1){
        count=0;
        for(i=2;i<num;i++){
            if(num%i==0){
                count++;
                break;
            }
        }
        if(count==0){
            primesum=primesum+Number(num);
        }
    }
}
console.log("Sum of all prime numbers are",primesum);
}
let number=prompt("Enter a number");
summ(number);