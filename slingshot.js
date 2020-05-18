class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
    }



    fly(){
        
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 210, 20);
        image(this.sling2, 185, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);           
            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+30, pointB.y);          
        }
    }
    
}