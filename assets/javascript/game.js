var random_num,
    current,
    wins = 0,
    losses = 0,
    gem = [];


function randomNum(gemgen, max, min){
 
  if (gemgen === true){
    
    while(gem.length < 4){
      
      let randomnumber = Math.floor(Math.random() * (max - min + 1) + min);

      if(gem.indexOf(randomnumber) > -1) continue;
      
      
      gem[gem.length] = randomnumber;
    }
  } else {
   
    random_num = Math.floor(Math.random() * (max - min + 1) + min);
  }
}


function setup() {
  
  current = 0;
  
  randomNum(true,12,1);
  
  
  randomNum(false,120,19);

  valueUpdate();
}


function valueUpdate() {
  
  $('#random').text(random_num);
  $('#user').text(current);
  $('#wins').text(wins);
  $('#losses').text(losses);
}


function clicks() {
  

  $('.gems img').on('click', function() {
 
    let num = $(this).attr('id');

    
    current += gem[num];
 
    valueUpdate();

  
    if (current > random_num) {

      $('.gems img').off('click');
      losses++;
      alert("YOU LOSE!");
      game();
    } else if (current === random_num) {

      $('.gems img').off('click');
      wins++;
      alert("YOU WIN!");
      game();
    }

  });

}


function game() {
 
  setup();

  
  clicks();
}


game();
