class Box {
    constructor(x,y,width,height){
        var options={
            restitution:0.3,
            friction:1.0,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        rect(0,0,this.width,this.height);
        
        pop();
    }
}