var TEXT_SECONDARY = "Select Your Predictions to start Game";
var TEXT_PRIMARY = "Welcome";
var TEXT_PLACE_BET = "Place your bet"
var AMOUNT = 100;
var PLAYER_ONE_TIME = 0;
var PLAYER_TWO_TIME = 0;
var PLAYER_ONE_FINISH = false;
var PLAYER_TWO_FINISH = false;
var WINNER = "";
var GAME_WON = false;
var BET_ONE = "Grant Wins";
var BET_TWO = "Yenum Wins";
var BET_THREE = "grant > 6.5 SECONDS";
var BET_FOUR = "grant < 6.5 SECONDS";
var BET_FIVE = "Yenum > 6.5 SECONDS";
var BET_SIX = "Yenum < 6.5 SECONDS";
var WIN_POSITION = 1000;
var LOSER = "";
var stage, w, h, loader, speedYenum, speedGrant;
var sky, world, player, ground, hill1, hill2;
var yenum, grant;

var PlayerOne, PlayerTwo;

var PLAYER_STATE = "idle"; //idle, run
var GAME_STATE = "menu"; //menu, run
