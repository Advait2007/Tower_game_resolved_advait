class Ball{
  constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20,20, options);
      this.image=loadImage("ball2.jpg")
      //this.image.scale=0.5
      this.width = 20;
      this.height = 20;
      
      
     
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0,this.width,this.height);
      pop();
    }
}