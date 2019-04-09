function platform(){
this.x = 0;
this.y = h-50;
this.show = function(){
fill(color('green'));
rect(this.x, this.y, w, 50);
}
}