function summ(number){

nonprimesum=0;
for(num of number){
    if(num>1){
        count=0;
        for(i=2;i<num;i++){
            if(num%i==0){
                nonprimesum=nonprimesum+Number(num);
                count++;
                break;
            }
        }
        if(count==0){
            
        }
    }
}

console.log("Sum of all Non-Primes is:",nonprimesum);
}
// let number=prompt("Enter a number:");
// summ(number);
summ(String(7633284));