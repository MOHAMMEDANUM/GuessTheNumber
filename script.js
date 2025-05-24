        let generateBtn = document.querySelector("#btn1")
        let startbtn = document.querySelector("#btn2")
        let outputGussed = document.querySelector("#winner")
        let outputMsg = document.querySelector("#msg")
        let randomNo = Math.round(Math.random()*20);
        let attempted = document.querySelector("span")
        
        let attempts = 3;

       
        let generateNo = ()=>{
             outputMsg.style="background-color: white"
               console.log(randomNo);
               console.log(attempts);
                
                let userInput = prompt("Guess the Number Between 0 to 20")

                // WINNER
                
                if(userInput == randomNo){
                  outputGussed.textContent = randomNo;
                  outputMsg.textContent = `!! WINNER WINNER CHICKEN DINNER !!`
                  outputMsg.style="background-color:green;border: none"
                  attempts = 3;
                  return;
                }

                // Greater Number

                else if(userInput > randomNo){
                  outputMsg.textContent = `The Entered ${userInput} Number is Greater !!`
                  outputMsg.style="background-color:orange;border: none"
                }

                // Lesser Number

                else if(userInput < randomNo){
                  outputMsg.textContent =  `The Entered ${userInput} Number is Lesser !!`
                  outputMsg.style="background-color:orange;border: none"
                }

                //  Attempts Left

                if(attempts > 0){
                  attempts--
                  attempted.textContent=` Attempts left is : ${attempts}`
                }

                //  Losser Attempts Zero

                if(attempts==0){
                  outputMsg.textContent =  `YOU HAVE LOST THE GAME`
                  startbtn.style="display:flex;justify-content: center;align-items: center;"
                  generateBtn.style="display:none"
                  outputMsg.style="background-color:red"


                //   attempts = 3
                }

            }            
        generateBtn.addEventListener("click" , generateNo);