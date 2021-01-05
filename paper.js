class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
            
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
       
        
        
   }
   display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50);
    pop();
   }
}