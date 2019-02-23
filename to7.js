$(document).ready(function(){
    let userChoice;
    let computerChoice;
    let userPoints = 0;
    let compPoints = 0;

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
    
    function updatePoints(){
        $('.userPoints').empty();
        $('.compPoints').empty();
        $('.userPoints').append('Points: ' + userPoints);
        $('.compPoints').append('Points: ' + compPoints);
    }
    
    function fight(combatChoice) {
        userChoice = combatChoice;
        computerChoice = combatChoices[random()];
        appendImage(userChoice, computerChoice);
        $('#result').empty();
        if(userPoints < 7 && compPoints < 7){
        if (userChoice == 'rock') {
            if (computerChoice == 'rock') {
                updatePoints();
                $('#result').append('<h2> You Both Tied! You Both Chose Rock!</h2>');
            }
            else if (computerChoice == 'paper') {
                compPoints += 1;
                updatePoints();
                $('#result').append('<h2> You Lost! Paper <i>Wraps</i> Rock!</h2>');
            }
            else {
                userPoints += 1;
                updatePoints();
                $('#result').append('<h2> You Won! Rock <i>Smashes</i> Scissor!</h2>');
            }
        }

        else if (userChoice == 'paper') {
            if (computerChoice == 'rock') {
                userPoints += 1;
                updatePoints();
                $('#result').append('<h2> You Won! Paper <i>Wraps</i> Rock!</h2>');
            } 
            else if (computerChoice == 'paper') {
                updatePoints();
                $('#result').append('<h2> You Both Tied! You Both Chose Paper!</h2>' );
            }
            else {
                compPoints += 1;
                updatePoints();
                $('#result').append('<h2> You Lost! Scissor <i>Cuts</i> Paper!</h2>');
            }
        }

        else if (userChoice =='scissor'){
            if (computerChoice == 'rock') {
                compPoints += 1;
                updatePoints();
                $('#result').append('<h2> You Lost! Rock <i>Smashes</i> Scissors!<h2>');
            }
            else if (computerChoice == 'paper') {
                userPoints += 1;
                updatePoints();
                $('#result').append('<h2> You Won! Scissor <i>Cuts</i> Paper!</h2>');
            }
            else {
                updatePoints();
                $('#result').append('<h2> You Both Tied! You Both Chose Scissor!</h2>');
            }
        }
        }
        else{
            if (userPoints ==7){
                disabled();
                $('#result').append('<h2> You WON the  entire game!</h2>' + '<button type="btn btn-primary" style="vertical-align:middle" onclick="window.location.reload()">Try Again!</button>');
            }
            else if (compPoints ==7){
                disabled();
                $('#result').append('<h2> You LOST the  entire game!</h2>' + '<button type="btn btn-primary" style="vertical-align:middle" onclick="window.location.reload()">Try Again!</button>');
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



