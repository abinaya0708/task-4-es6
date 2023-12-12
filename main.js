//1.......................................................................................

//palindrome or not

function palin(){
    return new Promise((r,s)=>{
            let x=328303;
            var rev=0, rem;
            temp=x;
        while(x>0){
            rem=x%10;
            rev=rev*10+rem;
            x=parseInt(x/10);
        }
        if(temp==rev){
            r("palindrome");
        }
        else{
            s("not palindrome")
        }
        })

}

palin().then(console.log);
palin().catch(console.log);

//2......................................................................................

//sum of digits...................................................................


function digits(){

    return new Promise((r,s)=>{

        let num=346;

        let sum=0;

        while(num>0){
            let rem=num%10;
            sum=sum+rem;
            num=parseInt(num/10);
        }
        if(sum%2==0){
            r("Even number")
        }
        else{
            s("Odd number")
        }
            })
        }


   digits().then(console.log);
   digits().catch(console.log);

//----------------------------------------------------------------------------------------------------------------

//3.prime number or not......................................................

function prime(){
    return new Promise((r,s)=>{
        let n=13;
        let one=true;
        for(i=2;i<n;i++){
            if(n%i==0){
                one=false;
            }
        }
        if(one==true){
            r("prime number");
        }
        else{
            s("not a prime number");
        }

    })

}
prime().then(console.log);
prime().catch(console.log);