
        
      //  HTML Elements
       
        let generateBtn = document.querySelector("#btn1")
        let startbtn = document.querySelector("#btn2")

        let outputGussed = document.querySelector("#winner")
        let outputMsg = document.querySelector("#msg")

        
        let attempted = document.querySelector("span")

        let displayimg =document.querySelector(".images")
        let imagesOfAttempts = document.getElementsByTagName("img")
        let img1=document.getElementById("img1")
        let img2=document.getElementById("img2")
        let img3=document.getElementById("img3")

        let topcelebrationimgs =document.getElementsByClassName("topimages")
        let buttomcelebrationimgs =document.querySelector(".buttomimages")

        let guessinput = document.querySelector("#guess")
        let submitbtn = document.querySelector("#submit")
        let giveupbtn = document.querySelector("#giveup")

        // Game Stats Section
        let gameStats = document.querySelector("text")
        let displayGameAttempts = document.getElementsByTagName("h2")


        let randomNo
        let userInput
        let wins = 0
        let winstreak = ""
        let reswinstreak = ""
        let attempts = 3


        // play again function       

        let playagain =()=>{

            // Resetting Game Stats

            displayGameAttempts[2].textContent = `Attempts : 3 / 3`
            // displayGameAttempts[4].textContent = `Winstreak : 0`
            displayGameAttempts[3].innerHTML = "Your Guesses :  "


            // if (wins > 0 && attempts >=1 ) {
            //   winstreak = reswinstreak
            //   displayGameAttempts[4].textContent = `Winstreak : ${winstreak}`
            //   console.log(`Winstreak : ${reswinstreak}`);
              
            // }

            // else if (wins == 0 && attempts >=1) {
            //   winstreak = 0
            //   displayGameAttempts[4].textContent = `Winstreak : ${winstreak}`
            // }   
            // else if (wins == 0 && attempts == 0) {
            //   winstreak = 0
            //   displayGameAttempts[4].textContent = `Winstreak : ${winstreak}`
            // }
            // else if (wins > 0 && attempts == 0) {
            //   winstreak = 0
            //   displayGameAttempts[4].textContent = `Winstreak : ${winstreak}`
            // }

            
          // Resetting UI Elements 

            outputGussed.textContent ="?";
            outputGussed.style="margin-left: 250px"

            outputMsg.textContent="Guess the Number"
            outputMsg.style="background-color:white"

            attempted.innerText=""
            guessinput.value = "";


            guessinput.style="display:none"
            submitbtn.style="display:flex justify-content: center;align-items: center;"
            giveupbtn.style="display:flex justify-content: center;align-items: center;"

            displayimg.style="display:flex"
            img3.style="display:flex"
            img1.style="display:flex"
            img2.style="display:flex"


            attempts = 3;

            startbtn.style="display:none"
            generateBtn.style="display:flex;justify-content: center;align-items: center;"

            topcelebrationimgs[0].style="display:none"
            buttomcelebrationimgs.style="display:none"


            if(guessinput.value === ""){
                outputMsg.textContent = "Please Generate a Random Number First"
                outputMsg.style="background-color: red;color:white;border:none"
                return
            }
            
            generateBtn.addEventListener("click" , generateNo)

        }
        startbtn.addEventListener("click",playagain)


        // Generate Random Number

        let generateNo = ()=>{
               outputMsg.style="background-color: white"
                outputMsg.textContent = "Enter the Guessed Number"

                guessinput.style="display:flex"
               
              //  console.log(attempts);
               randomNo = Math.round(Math.random()*10);
               console.log(randomNo);
                  generateBtn.style="display:none"


              }

        generateBtn.addEventListener("click" , generateNo);
              


        // Submit Guess Number function

        let submitNo = ()=>{
          
                userInput = guessinput.value;

                // WINNER
                
                if(userInput == randomNo){
                  outputGussed.textContent = randomNo;
                  outputGussed.style="margin: 10px auto";
                  outputMsg.textContent = `!! WINNER WINNER CHICKEN DINNER !!`
                  outputMsg.style="border:2px solid green;padding: 10px 0;margin:20px"
                  startbtn.style="display:flex;justify-content: center;align-items: center;"
                  generateBtn.style="display:none"

                  topcelebrationimgs[0].style="display:flex"
                  
                  buttomcelebrationimgs.style="display:flex;margin:47px 0 0 0"
                  submitbtn.style="display:none"
                  guessinput.style="display:none"
                  giveupbtn.style="display:none"
                  
                  displayimg.style="display:none"
                  attempted.textContent=""

                  wins++;
                  displayGameAttempts[4].textContent = `Wins : ${wins}`

                  reswinstreak = (wins > 0 && attempts >=1 )? winstreak++ : winstreak = 0
                  displayGameAttempts[6].textContent = `Winstreak : ${reswinstreak}`

                  displayGameAttempts[3].innerHTML +=' ' + userInput + ','


                  return
                }


                // Invalid Input

                else if(userInput === null || userInput === "" || isNaN(userInput) || userInput < 0 || userInput > 10){
                        outputMsg.textContent = "Please Enter a Valid Number Between 0 to 10"
                        outputMsg.style="background-color: red;color:white;border:none"
                        return
                }

                // Greater Number

                else if(userInput > randomNo){
                  outputMsg.textContent = `!! ${userInput} Number is Greater !! Try Again`
                  outputMsg.style="background-color:orange;border: none"
                  guessinput.value = "";
                  

                }

                // Lesser Number

                else if(userInput < randomNo){
                  outputMsg.textContent =  `!! ${userInput} Number is Lesser !! Try Again`
                  outputMsg.style="background-color:orange;border: none"
                  guessinput.value = "";


                }

                //  Attempts Left

                if(attempts > 0){
                  attempts--



                  // Attempts Left 3

                if(attempts==3){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:flex"
                    img3.style="display:flex"
                    img1.style="display:flex"
                    outputGussed.style="margin-left: 250px"
                    generateBtn.style="display:none"

                }

                // Attempts Left 2
                if(attempts==2){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:none"
                    outputGussed.style="margin-left: 250px"
                    generateBtn.style="display:none"
                    
                }


                // Attempts Left 1
                if(attempts==1){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:none"
                    img1.style="display:none"
                    img2.style="display:none"
                    outputGussed.style="margin-left: 250px"
                    generateBtn.style="display:none"
                }
                  attempted.textContent=` Attempts left is : ${attempts} `
                }

                displayGameAttempts[3].innerHTML +=' ' + userInput + ','


                //  Losser Attempts Zero

                if(attempts==0){
                  outputMsg.textContent =  `YOU HAVE LOST THE GAME`
                  startbtn.style="display:flex;justify-content: center;align-items: center;"
                  generateBtn.style="display:none"
                  outputMsg.style="background-color:red;color:white;border:none"
                  attempted.textContent=`Correct Number was ${randomNo}`
                  outputGussed.textContent = randomNo
                  displayimg.style="display:none"
                  outputGussed.style="margin-left: 0px"
                  guessinput.value = "";
                  submitbtn.style="display:none"
                  guessinput.style="display:none"
                  giveupbtn.style="display:none"
                  displayGameAttempts[2].textContent = `Attempts : 0 / 3`

                  return
                }

                // Updating Game Stats

                displayGameAttempts[2].textContent = `Attempts : ${attempts} / 3`

            }

        submitbtn.addEventListener("click",submitNo);         
        

