class Ball{
    constuctor(x,y,radius){
        var  options={
            density:1,
            frictionAir:0.005



        }
        this.body=Bodies.circle(x,y,circle)
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        
        pop();
    
    }

}