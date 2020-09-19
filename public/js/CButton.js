const CButton = function (imageId, x, y, scale) {
    this.button = new createjs.Bitmap(loader.getResult(imageId));
    this.button.x = x;
    this.button.y = y;
    this.button.scale = scale;
    this.containter = new createjs.Container()
}
