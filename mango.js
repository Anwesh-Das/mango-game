class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world,this.body);
    
      this.image = loadImage("mango.png");

   }
     display(){
      var paperpos=this.body.position;
      push()
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,100,100,60,60); 
      pop()
    }
}