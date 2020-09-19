const CGame = function (player1, player2, gameState) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameState = gameState;
    this.bet;
    this.changeSpeed = function () {
        this.player1.changeSpeed();
        this.player2.changeSpeed();
    };
    this.changeGameState = function (state) {
        this.gameState = state;
    };
    this.restartGame = function () {

    };
    this.placeBet = function (bet) {
        this.bet = bet;
    };
    this.checkBet = function (bet) {
        if (this.bet == bet) {
            updateBetWin();
        } else {
            updateBetLost();
        }
    };
    this.startGame = function () {
        this.gameState = "run";
    };
    this.checkWinner = function (p1, p2) {
        if (p1 == p2) {
            console.log("draw");
            this.displayWinner("Grant");
        } else if (p1 < p2) {
            console.log("Grant Wins");
            this.displayWinner("Grant");
        } else {
            console.log("Yenum Wins");
            this.displayWinner("Grant");
        }

        GAME_WON = true;
    };
    this.updateBetWin = function (params) {

    };
    this.updateBetLost = function (params) {

    };
    this.displayWinner = function (params) {

    };
    this.displayLoser = function (params) {

    };
    this.stopTimer = function (params) {

    };

}
