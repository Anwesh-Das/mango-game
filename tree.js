class Tree{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.image = loadImage("tree.png");

    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,-60,-180,500,500); 
        pop()
    }
  }
