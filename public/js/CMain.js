$(document).ready(function () {
    init();
});

function init() {
    console.log('loaded');

    //STAGE SETUP
    stage = new createjs.Stage("canvas");

    w = stage.canvas.width = window.innerWidth;
    h = stage.canvas.height = window.innerHeight;

    manifest = [{
            src: "spritesheet.png",
            id: "sheet"
        },
        {
            src: "spritesheet_grant.png",
            id: "grant"
        },
        {
            src: "spritesheet_yenum.png",
            id: "yenum"
        },
        {
            src: "hill1.png",
            id: "hill1"
        },
        {
            src: "hill2.png",
            id: "hill2"
        },
        {
            src: "world2.png",
            id: "world"
        },
        {
            src: "ground.png",
            id: "ground"
        },
        {
            src: "title2bg.png",
            id: "title2bg"
        },
        {
            src: "modalbg.png",
            id: "modal"
        },
        {
            src: "titlebg.png",
            id: "titlebg"
        },
        {
            src: "cancelbtn.png",
            id: "cancelbtn"
        },
        {
            src: "okbtn.png",
            id: "okbtn"
        },
        {
            src: "sky.png",
            id: "sky"
        }
    ];

    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest, true, "../img/sprite/");
}

function handleComplete() {

    // SETUP SKY

    sky = new createjs.Shape();
    sky.graphics
        .beginBitmapFill(loader.getResult("sky"))
        .drawRect(0, 0, w, h);
    sky.cache(0, 0, w, h);


    // SETUP WORLD
    world = new createjs.Container();
    world.x = world.y = 0;
    for (var i = 0; i <= 2; i++)
    {
        var worldImg = new createjs.Bitmap(loader.getResult("world"));
        worldImg.x = i * 1000;
        worldImg.y = 0;
        worldImg.scale = 0.3;
        console.log(worldImg);

        world.addChild(worldImg);
    }

    // SETUP HILLS
    hill1 = new createjs.Bitmap(loader.getResult("hill1"));
    hill1.setTransform(Math.random() * w, h - hill1.image.height * 2 - worldImg.height, 2, 2);
    hill1.alpha = 0.5;

    hill2 = new createjs.Bitmap(loader.getResult("hill2"));
    hill2.setTransform(Math.random() * w, h - hill2.image.height * 3 - worldImg.height, 3, 3);


    // SETUP PLAYER
    playerOne = new CPlayer(150, 140, 0.5, "grant", 50, 82, 0, 292, 165, 64, 0, null, 0, 25)
    grant = playerOne.sprite;

    playerTwo = new CPlayer(150, 210, 0.5, "yenum", 10, 83.5, 0, 167, 177, 64, 6, 9, 0, 5)
    yenum = playerTwo.sprite;

    // SETUP MODAL
    messagebg = new createjs.Bitmap(
        loader.getResult("titlebg")
    );
    messagebg.x = 35;
    messagebg.y = 0;

    modalbg = new createjs.Bitmap(
        loader.getResult("modal")
    );
    stage.addChild(sky, hill1, hill2, world, grant, yenum);
    //showModal(TEXT_PRIMARY, TEXT_SECONDARY);
    showBetModal(TEXT_PRIMARY, TEXT_PLACE_BET, BET_ONE, BET_TWO)
    //stage.addChild(sky, hill1, hill2, ground, grant);
    //stage.addChild(sky, hill1, hill2, world, yenum, grant, modal);
    //stage.addChild(world, grant);
    //stage.addEventListener("stagemousedown", handleJumpStart);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    // changeSpeed();
    createjs.Ticker.addEventListener("tick", tick);
    grantWinBtn.addEventListener("click", startGame);
    grantWinBtn.param = 1;
    yenumWinBtn.addEventListener("click", startGame);
    yenumWinBtn.param = 2
    // setInterval(() => {
    //     changeSpeed();
    // }, 3000);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function tick(event) {
    var deltaS = event.delta / 1000;
    var positionGrant, positionYenum;

    if (GAME_STATE == "run") {
        grant.x += playerOne.speed * deltaS;
        yenum.x += playerTwo.speed * deltaS;
        // ground.x = (ground.x - deltaS * 150) % ground.tileW;
        if (world.regX < 6000) {
            //var grantW = grant.getBounds().width * grant.scaleX;
            //grant.x = position >= w + grantW ? -grantW : position;
            world.regX += 10;
        }
    }

    if (GAME_STATE == "ended") {
        if (grant.x > WIN_POSITION) {
            grant.gotoAndPlay("idle");
        }
        if (yenum.x > WIN_POSITION) {
            yenum.gotoAndPlay("idle");
        }
        console.log(grant.x, yenum.x);
    }

    if (!GAME_WON) {
        if (!PLAYER_ONE_FINISH) {
            if (grant.x >= WIN_POSITION) {
                playerOne.timer = PLAYER_ONE_TIME;
                PLAYER_ONE_FINISH = true;
                if (WINNER == "yenum") {
                    WINNER = "yenum"
                    LOSER = "grant"
                    checkWinner(playerOne.timer, playerTwo.timer);
                    GAME_STATE = "ended"
                } else {
                    WINNER = "grant"
                    LOSER = "yenum"
                }
                console.log(WINNER + " IS THE WINNER!!!");
            }
        }

        if (!PLAYER_TWO_FINISH) {
            if (yenum.x >= WIN_POSITION) {
                playerTwo.timer = PLAYER_TWO_TIME;
                PLAYER_TWO_FINISH = true;
                if (WINNER == "grant") {
                    WINNER = "grant"
                    LOSER = "yenum"
                    checkWinner(playerOne.timer, playerTwo.timer);
                    GAME_STATE = "ended"
                } else {
                    WINNER = "yenum"
                    LOSER = "grant"
                }
                console.log(WINNER + " IS THE WINNER!!!");
            }
        }
    }

    hill1.x = hill1.x - deltaS * 30;
    if (hill1.x + hill1.image.width * hill1.scaleX <= 0) {
        hill1.x = w;
    }
    hill2.x = hill2.x - deltaS * 45;
    if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
        hill2.x = w;
    }
    //console.log(world.regX);;
    //console.log("Grant : " + playerOne.speed, "yenum :" + playerTwo.speed);
    // console.log("Grant Position: " + grant.x, "yenum Position:" + yenum.x);
    // console.log(WINNER, LOSER);
    // console.log(playerOne.timer, playerTwo.timer);
    stage.update(event);
}

function showModal(text_primary, text_secondary, timer_one, timer_two) {
    modalbg.x = 0;
    modalbg.y = 20;

    var player_one_timer_message, player_two_timer_message;

    modal = new createjs.Container();
    modal.x = w / 2 - 140;
    modal.y = h / 2 - 200;
    modal.scale = 1;

    ok = new CButton("okbtn", 150, 150, 0.6);
    okbtn = ok.button;
    cancel = new CButton("cancelbtn", 50, 150, 0.6);
    cancelbtn = cancel.button

    var _primary_message = new CText(135, 30, "center", 200, "alphabetic", text_primary, "20px Arial", "#fff");
    var primary_message = _primary_message.text;

    var _secondary_message = new CText(135, 80, "center", 250, "alphabetic", text_secondary, "20px Arial", "#fff");
    var secondary_message = _secondary_message.text;

    if (timer_one) {
        var _player_one_timer_message = new CText(135, 100, "center", 250, "alphabetic", timer_one, "20px Arial", "#fff");
        player_one_timer_message = _player_one_timer_message.text;
    }
    if (timer_two) {
        var _player_two_timer_message = new CText(135, 120, "center", 250, "alphabetic", timer_two, "20px Arial", "#fff");
        player_two_timer_message = _player_two_timer_message.text;
    }

    if (timer_one && timer_two) {
        modal.addChild(modalbg, messagebg, primary_message, secondary_message, player_one_timer_message, player_two_timer_message, okbtn, cancelbtn)
    } else {
        modal.addChild(modalbg, messagebg, primary_message, secondary_message, okbtn, cancelbtn)
    }


    stage.addChild(modal)
}

function showBetModal(text_primary, text_secondary, bet_one, bet_two, bet_three, bet_four) {
    modalbg.x = 0;
    modalbg.y = 20;

    var player_one_timer_message, player_two_timer_message;

    modal = new createjs.Container();
    modal.x = w / 2 - 140;
    modal.y = h / 2 - 200;
    modal.scale = 1;

    grantWinBtn = new CButton("okbtn", 40, 150, 0.7);
    grantWinBtn = grantWinBtn.button;
    yenumWinBtn = new CButton("okbtn", 140, 150, 0.7);
    yenumWinBtn = yenumWinBtn.button

    var _primary_message = new CText(135, 30, "center", 200, "alphabetic", text_primary, "18px Arial", "#fff");
    var primary_message = _primary_message.text;

    var _secondary_message = new CText(135, 80, "center", 250, "alphabetic", text_secondary, "20px Arial", "#fff");
    var secondary_message = _secondary_message.text;

    var _bet_one_text = new CText(90, 170, "center", 250, "alphabetic", bet_one, "14px Arial", "#fff");
    var bet_one_text = _bet_one_text.text;

    var _bet_two_text = new CText(190, 170, "center", 250, "alphabetic", bet_two, "14px Arial", "#fff");
    var bet_two_text = _bet_two_text.text;


    modal.addChild(modalbg, messagebg, primary_message, secondary_message, grantWinBtn, yenumWinBtn, bet_one_text, bet_two_text)

    stage.addChild(modal)
}

function removeModal() {
    stage.removeChild(modal);
}
function changeSpeed() {
    playerOne.changeSpeed();
    playerTwo.changeSpeed();
}

function startGame(event) {
    console.log(`Started Game ${event.currentTarget.param}`);
    removeModal();
    GAME_STATE = "run";
    grant.gotoAndPlay("run");
    yenum.gotoAndPlay("run");
    changeSpeed();
    setInterval(() => {
        PLAYER_ONE_TIME += 0.01;
        PLAYER_TWO_TIME += 0.01;
        //console.log("Timer: ", timer);
    }, 10);
}

function checkWinner(p1, p2) {
    if (p1 == p2) {
        console.log("draw");
        showModal("Game Result", "Ended in a Draw");
    } else if (p1 < p2) {
        console.log("Grant Wins");
        showModal("Game Result", "WINNER: Grant",  `Grant Time : ${p1.toFixed(2)}secs`,`Yenum Time: ${p2.toFixed(2)}secs`);
    } else {
        console.log("Yenum Wins");
        showModal("Game Result", "WINNER: Yenum",  `Yenum Time : ${p2.toFixed(2)}secs`,`Grant Time: ${p1.toFixed(2)}secs`);
    }

    GAME_WON = true;
}

//TODO Restart Game
//TODO Select Bet
//TODO Check if bet is a win

//TODO Display Game Winner/Loser Modal function

//TODO if bet is a win Display Game Winner Modal
//TODO if bet is a lose Display Game Loser Modal
