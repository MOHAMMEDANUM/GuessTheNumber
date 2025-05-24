let btn = document.querySelector("#btn")
        let outputGussed = document.querySelector("#winner")
        let outputMsg = document.querySelector("#msg")
        let randomNo = Math.round(Math.random()*20);
        let attempted = document.querySelector("span")
        
        let attempts = 3;

       
        let generateNo = ()=>{
             outputMsg.style="background-color: white"
               console.log(randomNo);
               console.log(attempts);

              if(attempts>0){

                
                let userInput = prompt("Guess the Number Between 0 to 20")
                
                if(userInput == randomNo){
                  outputGussed.textContent = randomNo;
                  outputMsg.textContent = `!! WINNER WINNER CHICKEN DINNER !!`
                  outputMsg.style="background-color:green;border: none"
                  attempts = 3;
                  return;
                  // outputMsg.style="border: none"
                  
                }
                else if(userInput > randomNo){
                  outputMsg.textContent = `The Entered ${userInput} Number is Greater !!`
                  outputMsg.style="background-color:orange;border: none"
                }
                else if(userInput < randomNo){
                  outputMsg.textContent =  `The Entered ${userInput} Number is Lesser !!`
                  outputMsg.style="background-color:orange;border: none"
                  
                }
                if(attempts > 0){
                  attempts--
                }
                else{
                  outputMsg.textContent =  `LOOSER LOOSER`
                  attempts = 3
                }
                attempted.textContent=` Attempts left is${attempts}`
                }
            }

        btn.addEventListener("click" , generateNo);