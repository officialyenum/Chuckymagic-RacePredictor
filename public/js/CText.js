const CText = function (x,y,align, lineWidth, baseline,text, font, color) {
    this.text = new createjs.Text(text, font, color);
    this.text.x = x;
    this.text.y = y;
    this.text.textAlign = align;
    this.text.lineWidth = lineWidth;
    this.text.textBaseline = baseline;
    this.changeText = function (text) {
        this.text.text = text;
    }
}
