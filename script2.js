let userPoints = 0;
let compPoints = 0;

$(document).ready(function(){
    let userChoice;
    let computerChoice;

    let combatChoices = ["rock", "paper", "scissor"]

    //chooses random index from 0 to 2x
    function random() {
        return (Math.floor(Math.random() * 3));
    }


    //You can't click on the image after you choose one
    function disabled(){
        $('.imgChoices').prop('disabled', true);
    }

    //gets the file location in the assets folder. like "/assets/rock.png"
    function assetFinder(combatChoice) {
        return "assets/" + combatChoice + ".png"
    }
    
    //puts an image inside
    function appendImage(userChoice, computerChoice){
        $('#myChoice').attr("src", assetFinder(userChoice));
        $('#compChoice').attr("src",assetFinder(computerChoice));
    }
    
    function fight(combatChoice) {
        userChoice = combatChoice;
        computerChoice = combatChoices[random()];
        appendImage(userChoice, computerChoice);
        //if(userPoints <= 3 && compPoints <= 3){
            if (userChoice == 'rock') {
                if (computerChoice == 'rock') {
                    $('#result').append('<h2> You Both Tied! You Both Chose Rock!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
                else if (computerChoice == 'paper') {
                    compPoints += 1;
                    $('.compPoints').append(compPoints);
                    $('#result').append('<h2> You Lost This Match!! Paper <i>Wraps</i> Rock!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
                else {
                    userPoints += 1;
                    $('.userPoints').append(userPoints);
                    $('#result').append('<h2> You Won This Match!! Rock <i>Smashes</i> Scissor!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
            }
    
            else if (userChoice == 'paper') {
                if (computerChoice == 'rock') {
                    userPoints += 1;
                    $('.userPoints').append(userPoints);
                    $('#result').append('<h2> You Won This Match!! Paper <i>Wraps</i> Rock!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                } 
                else if (computerChoice == 'paper') {
                    $('#result').append('<h2> You Both Tied! You Both Chose Paper!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
                else {
                    compPoints += 1;
                    $('.compPoints').append(compPoints);
                    $('#result').append('<h2> You Lost This Match!! Scissor <i>Cuts</i> Paper!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
            }
    
            else {
                if (computerChoice == 'rock') {
                    compPoints += 1;
                    $('.compPoints').append(compPoints);
                    $('#result').append('<h2> You Lost This Match! Rock <i>Smashes</i> Paper!<h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
                else if (computerChoice == 'paper') {
                    userPoints += 1;
                    $('.userPoints').append(userPoints);
                    $('#result').append('<h2> You Won This Match! Scissor <i>Cuts</i> Paper!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
                else {
                    $('#result').append('<h2> You Both Tied! You Both Chose Scissor!</h2>'); //+ '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
                }
            }
        /*}
        else{
            if (userPoints > compPoints){
                disabled();
                $('#result').append('<h2> You WON the  entire game!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
            
        }*/
    }

    var Rock = document.getElementById("Rock");
    document.getElementById("Rock").addEventListener("click",function(){ 
        fight('rock');
        });
    
    document.getElementById("Paper").addEventListener("click",function(){ 
        fight('paper');
        });
        
    document.getElementById("Scissor").addEventListener("click",function(){ 
        fight('scissor');
        });
})

// let imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'assets/rock.png';

// imgArray[1] = new Image();
// imgArray[1].src = 'assets/paper.png';

// imgArray[2] = new Image();
// imgArray[2].src = 'assets/scissor.jpg';

// function display(uChoice, cChoice){
//     let user = document.getElementById('user');
//     let cpu = document.getElementById('cpu');
    
//     let userChoice = imgArray[uChoice];
    
//     user.setAttribute(`src = ${userChoice.src}`);
// }



