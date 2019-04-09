function barrier(){
  this.x = w + 100;
  this.y =Math.floor(Math.random()*h);
  this.leftPull =1;
  this.velocity = 5;
  this.width = 100;
  this.height = 100;
  this.score = 0;

  this.show = function(){
    fill(color('blue'));
    rect(this.x, this.y, this.width, this.height);
  }
  this.update = function(){
    this.velocity += this.leftPull;
    this.x -= this.velocity;
    if(this.x<=0){
      this.score ++;
      this.x = w+100;
      this.y = Math.floor(Math.random()*h);
      this.velocity = 5;
    }
  }
}