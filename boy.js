class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.boy);

        this.boy = loadImage("boy.png");
        
    }

    fly(){
        this.boy.bodyA = null;
    }

    display(){
        imageMode(CENTER);
        image(this.boy,200,550,180,180);
    }
    
}