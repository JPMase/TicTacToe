// Variable for count of plays
var playCount = 0;

// Arrays for x and o respective plays
var xPlays = [];
var oPlays = [];

// For loop that creates board
for (var i = 1; i <= 9; i++) {
  if (i <= 3) {
    if (i % 3 === 0) {
      console.log(i);
      $(".highest").append("<div class='bottom tile' id='placeholder'></div>");
    } else {
      $(".highest").append("<div class='top tile' id='placeholder'></div>")
    }
  } else if (i <= 6) {
    if (i % 3 === 0) {
      $(".middle").append("<div class='bottom tile' id='placeholder'></div>");
    } else {
      $(".middle").append("<div class='top tile' id='placeholder'></div>");
    }
  } else if (i < 9) {
      $(".lowest").append("<div class='right tile' id='placeholder'></div>");
  } else {
      $(".lowest").append("<div class='tile' id='placeholder'></div>");
  }
  document.getElementById("placeholder").setAttribute("id", i);
}

// Function to determine horizontal tic tac toe
function isHorizontal(arr, start, count) {
  if (count === 3) {
    return true;
  }
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sorted.length; i++) {
    var play = sorted[i];
    if (play ===  start + 1) {
      return isHorizontal(sorted, play, count + 1);
    }
  }
  return false;
}

// Function to determine vertical tic tac toe
function isVertical(arr, start, count) {
  if (count === 3) {
    return true;
  }
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sorted.length; i++) {
    var play = sorted[i];
    if (play === start + 3) {
      return isVertical(sorted, play, count + 1);
    }
  }
  return false;
}

// Function to determine diagonal right tic tac toe
function isDiagRight(arr, start, count) {
  if (count === 3) {
    return true;
  }
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sorted.length; i++) {
    var play = sorted[i];
    if (play === start + 4) {
      return isDiagRight(sorted, play, count + 1);
    }
  }
  return false;
}

// Function to determine diagonal left tic tac toe
function isDiagLeft(arr, start, count) {
  if (count === 3) {
    return true;
  }
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sorted.length; i++) {
    var play = sorted[i];
    if (play === start + 2) {
      return isDiagLeft(sorted, play, count + 1);
    }
  }
  return false;
}

// On click event for plays
$(".tile").click(function() {
  if (playCount % 2 === 0) {
    $(this).html("X");
    // wins[this.id] = "X";
    xPlays.push(Number(this.id));
    playCount++;
    // Check for tic tac toe
    if (playCount > 4) {
      for (var i = 0; i < xPlays.length; i++) {
        if (isHorizontal(xPlays, xPlays[i], 1) || isVertical(xPlays, xPlays[i], 1) || isDiagLeft(xPlays, xPlays[i], 1) || isDiagRight(xPlays, xPlays[i], 1)) {
          // Team X wins animation
          $(".tile").fadeOut();
          $("#5").html("Team X wins!");
          $("#5").css("border-right", "0px");
          $("#5").css("border-bottom", "0px");
          $("#5").fadeIn();
        }
      }
    }
  } else {
    $(this).html("O");
    // wins[this.id] = "O";
    oPlays.push(Number(this.id));
    playCount++;
    // Check for tic tac toe
    if (playCount > 4) {
      for (var i = 0; i < oPlays.length; i++) {
        if (isHorizontal(oPlays, oPlays[i], 1) || isVertical(oPlays, oPlays[i], 1) || isDiagLeft(oPlays, oPlays[i], 1) || isDiagRight(oPlays, oPlays[i], 1)) {
          // Team O wins animation
          $(".tile").fadeOut();
          $("#5").html("Team O wins!");
          $("#5").css("border-right", "0px");
          $("#5").css("border-bottom", "0px");
          $("#5").fadeIn();
        }
      }
    }
  }
  // Event for when game is over
  if (playCount === 9) {
    $(".tile").fadeOut();
    $("#5").html("Game over. Thanks for playing.");
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







