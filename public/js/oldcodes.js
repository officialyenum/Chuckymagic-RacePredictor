// var groundImg = loader.getResult("ground");
// ground = new createjs.Shape();
// ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height);
// ground.tileW = groundImg.width;
// ground.y = h - groundImg.height;
// //By default swapping between Stage for StageGL will not allow for vector drawing operation such as BitmapFill, useless you cache your shape.
// ground.cache(0, 0, w + groundImg.width, groundImg.height);


// var grant_data = {
//     framerate: 50,
//     images: [loader.getResult("grant")],
//     frames: {
//         regX: 82,
//         height: 292,
//         count: 64,
//         regY: 0,
//         width: 165
//     },
//     // define two animations, run (loops, 1.5x speed) and jump (returns to run):
//     animations: {
//         idle: [0],
//         run: [0, 25, "run", 1.5],
//         jump: [26, 63, "run"]
//     }
// }
// var grant_spriteSheet = new createjs.SpriteSheet(grant_data);
// grant = new createjs.Sprite(grant_spriteSheet, "run");
// grant.scale = 0.5;
// grant.x = 150;
// grant.y = 150;


// console.log(yenum);
//stage.addChild(sky, hill1, hill2, ground, grant);
// stage.addChild(sky, hill1, hill2, world, yenum, grant);
//stage.addChild(world, grant);
//stage.addEventListener("stagemousedown", handleJumpStart);
