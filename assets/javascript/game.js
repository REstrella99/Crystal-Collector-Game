var randomize,
    currentNum,
    wins = 0,
    losses = 0,
    gem = [];


function randomNum(gemgen, max, min) {

    if (gemgen === true) {

        while (gem.length < 4) {

            let randomnumber = Math.floor(Math.random() * (max - min + 1) + min);

            if (gem.indexOf(randomnumber) > -1) continue;


            gem[gem.length] = randomnumber;
        }
    } else {

        randomize = Math.floor(Math.random() * (max - min + 1) + min);
    }
}


function setup() {

    currentNum = 0;

    randomNum(true, 12, 1);


    randomNum(false, 120, 19);

    update();
}


function update() {

    $('#random').text(randomize);
    $('#user').text(currentNum);
    $('#wins').text(wins);
    $('#losses').text(losses);
}


function mouseClick() {


    $('.gems img').on('click', function () {

        let num = $(this).attr('id');


        currentNum += gem[num];

        update();


        if (currentNum > randomize) {

            $('.gems img').off('click');
            losses++;
            alert("YOU LOSE!");
            play();
        } else if (currentNum === randomize) {

            $('.gems img').off('click');
            wins++;
            alert("YOU WIN!");
            play();
        }

    });

}


function play() {

    setup();


    mouseClick();
}


play();
