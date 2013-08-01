/*游戏工具*/
document.onkeydown = keydown;
document.onkeyup = keyup;
window.addEventListener('deviceorientation', this.orientationListener, false); //方向感应器  
window.addEventListener('MozOrientation', this.orientationListener, false); //方向感应器 for firefox      
window.addEventListener('devicemotion', this.orientationListener, false); //重力加速感应器 for iphone, andro
function keydown(e) {
    var keyName;　
    var e = e || event;　
    var currKey = e.keyCode || e.which || e.charCode;　
    if ((currKey > 7 && currKey < 14) || (currKey > 31 && currKey < 47))　 {　　
        switch (currKey)　　 {　　　　
        case 37:
            game1.fj1.move("R");
            break;　　　
        case 39:
            game1.fj1.move("L");
            break;　　　　
        }　　
    }
}
id 
function orientationListener(e) {

    var gamma = e.gamma;
    if (gamma > 10) {

        game1.fj1.move("L");
    } else {
        game1.fj1.move("CL");

    }
    if (gamma < -10) {

        game1.fj1.move("R");
    } else {
        game1.fj1.move("CR");
    }
}

function keyup(e) {
    var keyName;　
    var e = e || event;　
    var currKey = e.keyCode || e.which || e.charCode;　
    if ((currKey > 7 && currKey < 14) || (currKey > 31 && currKey < 47))　 {　　
        switch (currKey) {　　
        case 37:
            game1.fj1.move("CR");
            break;　　　
        case 39:
            game1.fj1.move("CL");
            break;　
        }　
    }

}

function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function drWall() {
    var n = random(0, 15);
    var n3 = random(10, 21);
    var n2 = 15 - n;
    var wall1 = new wall(633, 20 * n, 10 * n3, 2);
    game1.wallList.push(wall1);
    var wall1 = new wall(633, 20 * n2, 10 * n3, 1);
    game1.wallList.push(wall1);
}