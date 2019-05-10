// Enemies our player must avoid
var Enemy = function(x,y,speed) {
  this.x=x;
  this.y=y;
  this.speed=speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies=[];
var evil=[50,135,220];
for(i in evil)
{
  var obj= new Enemy(0,evil[i],200);
  allEnemies.push(obj);
}
var lives=3;
var level=0;
var ll=0;
Enemy.prototype.checkCollisions=function () {
  if(player.x<this.x+60 && player.x+60 >this.x && player.y <this.y+60 && player.y+65>this.y){
    player.x=200;
    player.y=400;
    lives--;
    if(lives<=0)
    {
      ll=-1;
    }
  }
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

 this.x=this.x+this.speed*dt;
 if(this.x>500){
 this.x=0;
 level++;
this.speed=100+Math.floor((Math.random()*200)+30);

}
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//player function
var Player = function(x,y){
this.x=x;
this.y=y;
  this.sprite='images/char-boy.png';
};

//update functiom for Player
var count=0;
Player.prototype.update = function(dt) {

if(this.y < 0){

setTimeout(()=> {
  this.x=200;
  this.y=400;
 count++;
}, 10);
}

};


//player render function
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Place the player object in a variable called player
var player=new Player(200,400);
player.handleInput=function(a) {
if(a=='left' && this.x>0){
  this.x-=100;
}
else if(a=='right'&& this.x<385){
  this.x+=101;
}
else if(a=='up'&& this.y>0){
  this.y-=83;
}
else if(a=='down'&& this.y<400) {
  this.y+=83;
}
}






// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// to handle input from keybord we have 3 events: keydown,keypress,keyup.
document.addEventListener('keyup', function(e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//check collosion methods
Player
