var answer;


function setupGame() {
    $("#tbxGuess").val("");
    $("#message").text("");

    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter" + answer);


    $("#intro").show();
    $("#game").hide();

}

function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        //tell them the answer is right
        $("#message").text("You're right");

    }
    else {
        // tell them the answer is wrong
        $("#message").text("Nope, try again!");

    }
}

function playGame() {

    $("#intro").hide();
    $("#game").show();

}

$(function () {
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);


    setupGame();


});
