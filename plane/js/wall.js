/*障碍*/
var wall = function(y, width, hight, type) {
    this.y = y;
    this.width = width;
    this.hight = hight;
    this.type = type;
	this.die=0;
};

wall.prototype.dr = function() {
    var ctx = game1.ctx2;
    ctx.save();
    if (this.type == 1) {
        ctx.beginPath();
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 8;
        ctx.globalAlpha = 0.4;
        ctx.moveTo(0, this.y + 30);
        ctx.lineTo(this.width + 20, this.y + 30);
        ctx.arcTo(this.width + 40, this.y + 30, this.width + 40, this.y + 50, 20);
        ctx.lineTo(this.width + 40, this.y + 30+this.hight);
        ctx.arcTo(this.width + 40, this.y + 70+this.hight, this.width, this.y + 70+this.hight, 20);
        ctx.lineTo(0, this.y + 70+this.hight);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 10;
        ctx.moveTo(0, this.y);
        ctx.lineTo(this.width, this.y);
        ctx.arcTo(this.width + 20, this.y, this.width + 20, this.y + 20, 20);
        ctx.lineTo(this.width + 20, this.y + this.hight);
        ctx.arcTo(this.width + 20, this.y + 40+ this.hight, this.width, this.y + 40+ this.hight, 20);
        ctx.lineTo(0, this.y  + 40+ this.hight);
        ctx.stroke();
    } else if (this.type == 2) {
        ctx.beginPath();
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 8;
        ctx.globalAlpha = 0.4;
        ctx.moveTo(512, this.y + 30);
        ctx.lineTo(512 - this.width + 20, this.y + 30);
        ctx.arcTo(512 - this.width, this.y + 30, 512 - this.width, this.y + 50, 20);
        ctx.lineTo(512 - this.width, this.y+ 30+this.hight);
        ctx.arcTo(512 - this.width, this.y + 70+this.hight, 512 - this.width + 20, this.y  + 70+this.hight, 20);
        ctx.lineTo(512, this.y + 70+this.hight);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 10;
        ctx.moveTo(512, this.y);
        ctx.lineTo(512 - this.width, this.y);
        ctx.arcTo(512 - this.width - 20, this.y, 512 - this.width - 20, this.y + 20, 20);
        ctx.lineTo(512 - this.width - 20, this.y + this.hight);
        ctx.arcTo(512 - this.width - 20, this.y  + 40+ this.hight, 512 - this.width, this.y + 40+ this.hight, 20);
        ctx.lineTo(512, this.y  + 40+ this.hight);
        ctx.stroke();
    }
    ctx.restore();
}

/**检测碰撞**/
wall.prototype.pz = function(a, b) {
    if (this.type == 1) {
        if (b < (this.y + this.hight + 25) && b > this.y - 25 && a > 0 - 15 && a < this.width + 15) {
            game1.fj1.die = 1;
        }
    } else if (this.type == 2) {
        if (b < (this.y + this.hight + 25) && b > this.y - 25 && a > 512 - this.width - 40 && a < 512 + 15) {
            game1.fj1.die = 1;
        }
    }
}
wall.prototype.move = function() {
	if(this.y>-280){
    this.y -= (game1.fj1.speed+(Math.PI/2-Math.abs(game1.fj1.arc))*(game1.fj1.speed/5)) * Math.cos(game1.fj1.arc);
	}else{
		this.die=1;
		}
}