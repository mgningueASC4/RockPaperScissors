$(document).ready(function(){
    let userChoice;
    let computerChoice;

    let combatChoices = ["rock", "paper", "scissors"]

    function random() {
        return (Math.floor(Math.random() * 3));
    }



    function disabled(){
        $('.imgChoices').prop('disabled', true);
    }
    
    function assetFinder(combatChoice) {
        return "assets/" + combatChoice + ".png"
    }
    
    function appendImage(userChoice, computerChoice){
        $('#myChoice').attr("src", assetFinder(userChoice));
        $('#compChoice').attr("src",assetFinder(computerChoice));
    }
    
    function fight(combatChoice) {
        userChoice = combatChoice;
        computerChoice = combatChoices[random()];
        disabled();
        appendImage(userChoice, computerChoice);
        if (userChoice == 'rock') {
            if (computerChoice == 'rock') {
                disabled();
                $('#result').append('<h2> You Both Tied! You Both Chose Rock!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
            else if (computerChoice == 'paper') {
                disabled();
                $('#result').append('<h2> You Lost! Paper <i>Wraps</i> Rock!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
            else {
                disabled();
                $('#result').append('<h2> You Won! Rock <i>Smashes</i> Scissors!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
        }

        else if (userChoice == 'paper') {
            if (computerChoice == 'rock') {
                disabled();
                $('#result').append('<h2> You Won! Paper <i>Wraps</i> Rock!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            } 
            else if (computerChoice == 'paper') {
                disabled();
                $('#result').append('<h2> You Both Tied! You Both Chose Paper!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
            else {
                disabled();
                $('#result').append('<h2> You Lost! Scissor <i>Cuts</i> Paper!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
        }

        else {
            if (computerChoice == 'rock') {
                disabled();
                $('#result').append('<h2> You Lost! Rock <i>Smashes</i> Paper!<h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
            else if (computerChoice == 'paper') {
                disabled();
                $('#result').append('<h2> You Won! Scissors <i>Cuts</i> Paper!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
            else {
                disabled();
                $('#result').append('<h2> You Both Tied! You Both Chose Scissors!</h2>' + '<button onClick="window.location.reload()" class="tryAgain" value="Click Here to Try Again!">');
            }
        }
    }

    document.getElementById("Rock").addEventListener("click",function(){ 
        fight('rock');
        });
    
    document.getElementById("Paper").addEventListener("click",function(){ 
        fight('paper');
        });
        
    document.getElementById("Scissors").addEventListener("click",function(){ 
        fight('scissors');
        });
})

let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/scissors.png';

function display(uChoice, cChoice){
    let user = document.getElementById('user');
    let cpu = document.getElementById('cpu');
    
    let userChoice = imgArray[uChoice];
    
    user.setAttribute(`src = ${userChoice.src`);
}



