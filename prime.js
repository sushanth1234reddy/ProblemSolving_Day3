function prime(num){
    if(num>1){
        let prime=true;
        for(i=2;i<num;i++){
            if(num%i==0){
                console.log(num,"Not a prime");
                prime=false;
                break;

            }
        }
        if(prime==true){
            console.log(num,"is prime");
        }

    }
    else{
        console.log("Enter a valid number");
    }

}
prime(71);
prime(12);
prime(1);
prime(13);
prime(17);