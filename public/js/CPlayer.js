console.log("this script loads");

const CPlayer = function (x, y, scale, name, framerate, regX, regY, h, w, count, idle1, idle2, run1, run2) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.data = {
        framerate: framerate,
        images: [loader.getResult(name)],
        frames: {
            regX: regX,
            height: h,
            count: count,
            regY: regY,
            width: w
        },
        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
        animations: {
            idle: idle2 == null ? [idle1, "idle"] : [idle1, idle2, "idle"],
            run: [run1, run2, "run", 1.5],
        }
    };
    this.timer = 0;
    this.speed = 100;
    this.spritesheet = new createjs.SpriteSheet(this.data);
    this.sprite = new createjs.Sprite(this.spritesheet, PLAYER_STATE);
    this.sprite.scale = scale;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.changeSpeed = function () {
        this.speed = getRndInteger(50, 100)
    }
}

