        let generateBtn = document.querySelector("#btn1")
        let startbtn = document.querySelector("#btn2")

        let outputGussed = document.querySelector("#winner")
        let outputMsg = document.querySelector("#msg")

        let randomNo = Math.round(Math.random()*10);
        let attempted = document.querySelector("span")

        let displayimg =document.querySelector(".images")
        let imagesOfAttempts = document.getElementsByTagName("img")
        let img1=document.getElementById("img1")
        let img2=document.getElementById("img2")
        let img3=document.getElementById("img3")

        let topcelebrationimgs =document.getElementsByClassName("topimages")
        let buttomcelebrationimgs =document.querySelector(".buttomimages")


        
        let attempts = 3;

        let playagain =()=>{

            outputGussed.textContent ="?";
            outputGussed.style="margin-left: 275px"

            outputMsg.textContent="Guess the Number"
            outputMsg.style="background-color:white"

            attempted.innerText=""

            displayimg.style="display:flex"
            img3.style="display:flex"
            img1.style="display:flex"
            img2.style="display:flex"


            attempts = 3;

            startbtn.style="display:none"
            generateBtn.style="display:flex;justify-content: center;align-items: center;"

            topcelebrationimgs[0].style="display:none"
            buttomcelebrationimgs.style="display:none"



            generateBtn.addEventListener("click" , generateNo);
            randomNo = Math.round(Math.random()*10);

        }
        startbtn.addEventListener("click",playagain)
        let generateNo = ()=>{
               outputMsg.style="background-color: white"
               console.log(randomNo);
               console.log(attempts);
                
                let userInput = prompt("Guess the Number Between 0 to 10")

                // WINNER
                
                if(userInput == randomNo){
                  outputGussed.textContent = randomNo;
                  outputMsg.textContent = `!! WINNER WINNER CHICKEN DINNER !!`
                  outputMsg.style="border:2px solid green;padding: 10px 0;"
                  startbtn.style="display:flex;justify-content: center;align-items: center;"
                  generateBtn.style="display:none"

                  topcelebrationimgs[0].style="display:flex"
                  buttomcelebrationimgs.style="display:flex"
                  return
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
                if(attempts==3){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:flex"
                    img3.style="display:flex"
                    img1.style="display:flex"
                    outputGussed.style="margin-left: 275px"
                }
                if(attempts==2){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:none"
                    outputGussed.style="margin-left: 275px"
                }
                if(attempts==1){
                    displayimg.style="display:flex"
                    imagesOfAttempts[2].style="display:none"
                    img1.style="display:none"
                    img2.style="display:none"
                    outputGussed.style="margin-left: 275px"
                }
                  attempted.textContent=` Attempts left is : ${attempts}`
                }

                //  Losser Attempts Zero

                if(attempts==0){
                  outputMsg.textContent =  `YOU HAVE LOST THE GAME`
                  startbtn.style="display:flex;justify-content: center;align-items: center;"
                  generateBtn.style="display:none"
                  outputMsg.style="background-color:red"
                  attempted.textContent=`Correct Number was ${randomNo}`
                  outputGussed.textContent = randomNo
                  displayimg.style="display:none"
                  outputGussed.style="margin-left: 0px"

                  


                  return
                
                }

            }            
        generateBtn.addEventListener("click" , generateNo);
        

