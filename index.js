var playCount = 0;

var wins = {}

// On click event for plays
$(".tile").click(function() {
  if (playCount % 2 === 0) {
    $(this).html("X");
    wins[this.id] = "X";
  } else {
    $(this).html("O");
    wins[this.id] = "O";
  }
  playCount++;
  // Event for when game is over
  if (playCount === 9) {
    $(".tile").fadeOut();
    $("#5").html("Game over. Thanks for playing.");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[1] && wins[1] === wins[2] && wins[2] === wins[3]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[1] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[4] && wins[4] === wins[5] && wins[5] === wins[6]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[4] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[7] && wins[7] === wins[8] && wins[8] === wins[9]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[7] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[1] && wins[1] === wins[4] && wins[4] === wins[7]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[1] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[2] && wins[2] === wins[5] && wins[5] === wins[8]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[2] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[3] && wins[3] === wins[6] && wins[6] === wins[9]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[1] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[1] && wins[1] === wins[5] && wins[5] === wins[9]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[1] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }

  if (!!wins[7] && wins[7] === wins[5] && wins[5] === wins[3]) {
    $(".tile").fadeOut();
    $("#5").html("Team " + wins[7] + " wins!");
    $("#5").css("border-right", "0px");
    $("#5").css("border-bottom", "0px");
    $("#5").fadeIn();
  }
});

// Reset game on click event
$("#reset").click(function() {
  playCount = 0;
  wins = {};
  $(".tile").html("");
  $("#5").css("border-right", "1px solid black");
  $("#5").css("border-bottom", "1px solid black");
  $(".tile").fadeIn();
});







