function jumper(){
        this.x = 50;
        this.y = h-55;
        this.gravity = 0.5; //the force of gravity is one;
        this.lift = -10;//opposing force actd on when key is pressed
        this.velocity = 0;//start speed of gravity
        this.width = 25;
        this.height = 25;
        this.show = function(){
          fill(color('red'));
          ellipse(this.x, this.y, this.width,this.height);
        }
        this.up = function(){
          this.velocity += this.lift;
        }
        this.move = function(){
          if(keyIsDown(65) && this.x>0){//keyA
          this.x -= 10;
        }
        if(keyIsDown(68)&& this.x< w-50){
          this.x += 10;
        }
        }
        this.update = function(){
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          if(this.y > h){//stop on floor
            this.y= h;
            this.velocity = -50;//if this.velocity = -10, it can bounce
          }
          if(this.y<0){//stop on ceiling
            this.y = 0;
            this.velocity = 0;
          }
        }
        
      }
      function keyPressed(){
        if(keyCode === 32){
          jumper.up();
        }
      }