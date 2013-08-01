/*我方飞机类*/
var fj = function(x, y) {
    this.x = x;
    this.y = y;
    this.arc = 0;
    this.score = 0;
	this.Hscore = localStorage.getItem("score");;
    this.die = 0;
    this.timerL;
	this.speed = 2;
    this.timerR;
    this.k1 = 1;
    this.k2 = 1;
	this.t = 0;
};

/*画飞机*/
fj.prototype.dr = function() {
    var ctx = game1.ctx2;
    ctx.save();
    ctx.translate(this.x + 30 / 2, this.y + 50 / 2);
    ctx.rotate(this.arc);
    ctx.beginPath();
	ctx.globalAlpha=0.6;
	ctx.fillStyle = "#222";
	ctx.moveTo( - 12+20, -20+30);
    ctx.lineTo(0+20, -14+30);
    ctx.lineTo(12+20, -20+30);
    ctx.lineTo(0+20, 20+30);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 1;
	ctx.globalAlpha=1;
    ctx.strokeStyle = "#222";
	ctx.fillStyle = "#fff";
	ctx.moveTo( - 15, -25);
    ctx.lineTo(0, -17);
    ctx.lineTo(15, -25);
    ctx.lineTo(0, 25);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#222";
	ctx.moveTo(0, -17);
    ctx.lineTo(0, 25);
    ctx.stroke();
    ctx.restore();

}


fj.prototype.move = function(fx) {
    switch (fx)　　 {　　　　
    case "R":
        if (this.k1) {
            this.timerR = setInterval(function() {
			if(game1.fj1.arc <= Math.PI/2){
                game1.fj1.arc += Math.PI / 100;
			}
                game1.fj1.k1 = 0;
            },
            20)
        }
        break;　　　　
    case "L":
        if (this.k2) {
            this.timerL = setInterval(function() {
			if(game1.fj1.arc >= -Math.PI/2){
                game1.fj1.arc -= Math.PI / 100;}
                game1.fj1.k2 = 0;
            },
            20)
        }
        break;　　　　
    case "CR":
        clearInterval(this.timerR);
        this.k1 = 1;
        break;　　　　
    case "CL":
        clearInterval(this.timerL);
        this.k2 = 1;
        break;
    }　　　　
}

fj.prototype.checkborder = function(screenWidth, screenHeight) {
    if (this.x <= 15||this.x >= 512-15) {
		this.die=1;
		
		}
   
}

fj.prototype.moved = function() {
	var _s = (this.speed+(Math.PI/2-Math.abs(this.arc))*(this.speed/5)) * Math.cos(this.arc);
    this.x -= (this.speed+(Math.PI/2-Math.abs(this.arc))*(this.speed/5))  * Math.sin(this.arc);
    if(this.y<300){
		 this.y += _s;
	}else{
			game1.gy-=_s;
			if(game1.gy<=-705){
				game1.gy+=1410;
				}
	  game1.gy2-=_s;
		if(game1.gy2<=-705){
				game1.gy2+=1410;
		}
		}
		this.score+=Math.round(_s);
		this.t += Math.round(_s);
		if(this.t >=420){
			 drWall();
			 this.t=0;
			 this.speed+=0.1;
    }

}