

var randomNumber,
  currentNumber,
  wins = 0,
  losses = 0,
  gemstone = [];


function randomize(gemspawn, max, min) {


  if (gemspawn === true) {

    while (gemstone.length < 4) {
      let chancenumber = Math.floor(Math.random() * (max - min + 1) + min);


      if (gemstone.indexOf(chancenumber) > -1) continue;


      gemstone[gemstone.length] = chancenumber;
    }
  } else {

    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
}


function structure() {


  currentNumber = 0;


  randomize(true, 12, 1);


  randomize(false, 120, 19);

  Update();
}


function Update() {

  $('#random').text(randomNumber);
  $('#user').text(currentNumber);
  $('#wins').text(wins);
  $('#losses').text(losses);
}


function onClick() {



  $('.gems img').on('click', function () {

    let value = $(this).attr('id');


    currentNumber += gemstone[value];

    Update();


    if (currentNumber > randomNumber) {

      $('.gems img').off('click');
      losses++;
      alert("YOU LOSE!");
      play();
    } else if (currentNumber === randomNumber) {

      $('.gems img').off('click');
      wins++;
      alert("YOU WIN!");
      play();
    }

  });

}


function play() {



  structure();

  onClick();
}

play();
