
        
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
        let winstreak = 0
        let reswinstreak = 0;
        let attempts = 3;

        let playagain =()=>{

            // Resetting Game Stats

            displayGameAttempts[1].textContent = `Attempts : 3 / 3`
            displayGameAttempts[4].textContent = `Winstreak : 0`


            outputGussed.textContent ="?";
            outputGussed.style="margin-left: 250px"

            outputMsg.textContent="Guess the Number"
            outputMsg.style="background-color:white"

            attempted.innerText=""
            guessinput.value = "";

            guessinput.style="display:flex"
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

            generateBtn.addEventListener("click" , generateNo);
            
            

        }

        startbtn.addEventListener("click",playagain)

        // Generate Random Number

        let generateNo = ()=>{
               outputMsg.style="background-color: white"
                outputMsg.textContent = "Enter the Guessed Number"
               
              //  console.log(attempts);
               randomNo = Math.round(Math.random()*10);
               console.log(randomNo);
              }
        generateBtn.addEventListener("click" , generateNo);


        // Submit Guess 
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
                  displayGameAttempts[3].textContent = `Wins : ${wins}`

                  reswinstreak = (wins > 0 && attempts >=1 )? winstreak++ : winstreak = 0
                  displayGameAttempts[4].textContent = `Winstreak : ${reswinstreak}`

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
                if(attempts==3){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:flex"
                    img3.style="display:flex"
                    img1.style="display:flex"
                    outputGussed.style="margin-left: 250px"
                }
                if(attempts==2){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:none"
                    outputGussed.style="margin-left: 250px"
                }
                if(attempts==1){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:none"
                    img1.style="display:none"
                    img2.style="display:none"
                    outputGussed.style="margin-left: 250px"
                }
                  attempted.textContent=` Attempts left is : ${attempts} `
                }

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
                  displayGameAttempts[1].textContent = `Attempts : 0 / 3`
                  return
                }


                // Updating Game Stats

                displayGameAttempts[1].textContent = `Attempts : ${attempts} / 3`


            }

        submitbtn.addEventListener("click",submitNo);         
        

