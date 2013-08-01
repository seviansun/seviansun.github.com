function game(c) {
    this.wallList = [];
    this.zd = "a";
    this.fj1 = null;
    this.stimer = null;
    this.t = [];
    this.leg = 0;
    this.c = c;
	this.gy = 0;
	this.gy2 = 705;
	this.overt=0;
    this.ctx2 = c.getContext("2d");
}
/**绘制背景**/
game.prototype.drBg = function() {
	var ctx = this.ctx2;	
	 ctx.drawImage(bg2,0,this.gy);
	 ctx.drawImage(bg2,0,this.gy2);
     ctx.beginPath();
	 ctx.fill();
}
game.prototype.gamestart = function() {
    game1.start();
}
/**绘制信息**/
game.prototype.drXx = function() {
    var ctx = this.ctx2;
	var _fj1 = this.fj1;
    ctx.save();
    ctx.beginPath();
	ctx.shadowColor = "#222";
    ctx.shadowOffsetY = 2;
    ctx.shadowOffsetX = 2;
    ctx.fillStyle = "#fff;";
    ctx.font = "bold 16px Microsoft Yahei";
    ctx.fillText("你已下降"+_fj1.score+"英尺", 20, 30);
    ctx.fill(); 
	ctx.fillStyle = "#fff;";
	ctx.fillText("最高纪录："+_fj1.Hscore+"英尺", 330, 30);
	ctx.restore();
}

/**绘制精灵**/
game.prototype.drObj = function() {
    var _fj1 = this.fj1;
    for (var i = 0; i < this.wallList.length; i++) {
        if (this.wallList[i].die) {
            this.wallList.splice(i, 1);
        }
    }
    this.ctx2.clearRect(0, 0, 512, 633);
    this.drBg();
	 if (!_fj1.die) {
		for (var i = 0; i < this.wallList.length; i++) {
        this.wallList[i].dr();
		this.wallList[i].pz(_fj1.x,_fj1.y);
		this.wallList[i].move();
    }
        _fj1.dr();
		_fj1.moved();
		_fj1.checkborder();
		this.drXx();
    } else {
        this.gameover();
    }
}


game.prototype.gameover = function() {
    var ctx = this.ctx2;
	ctx.save();
    ctx.beginPath();
	ctx.shadowColor = "#000";
    ctx.shadowOffsetY = 3;
    ctx.shadowOffsetX = 3;
    ctx.fillStyle = "#fff;";
    ctx.font = "bold 46px Verdana";
    ctx.fillText("ＧＡＭＥ　ＯＶＥＲ", 60, 160);
	ctx.font = "bold 30px Verdana";
	ctx.fillText("您的成绩是"+game1.fj1.score+"英尺", 100, 240);
	if(game1.fj1.Hscore){
		ctx.fillText("最高纪录："+game1.fj1.Hscore+"英尺", 100, 290);
		}
	
    ctx.fill();
	ctx.restore();
	if(!this.overt){
		overDiv.style.display = "block";
		if(game1.fj1.score>game1.fj1.Hscore)
		localStorage.setItem("score",game1.fj1.score);
		}
	this.overt++;
}

game.prototype.start = function() {
    this.fj1 = new fj(230, -60);
    this.stimer = setInterval(function() {
        game1.drObj();
    },
    17);
	
}
/**游戏初始化**/
game.prototype.init = function() {
    this.wallList = [];
    this.zd = "a";
    this.fj1 = null;
    this.t = [];
    this.leg = 0;
    this.overt=0;
	this.gy = 0;
	this.gy2 = 705;
	clearInterval(this.stimer);
}