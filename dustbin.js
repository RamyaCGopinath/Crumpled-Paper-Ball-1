class Dustbin{
    constructor(x,y,w,h,c){
        var options = {
            isStatic: true,
            density:2
        }
        this.w = w;
        this.h = h;
        this.color = c;
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.body2 = Bodies.rectangle(x-50,y-25,20,70,options);
        this.body3 = Bodies.rectangle(x+50,y-25,20,70,options);
        World.add(world,this.body);
        World.add(world,this.body2);
        World.add(world,this.body3);
    }

    display(){
        
        rectMode(CENTER);
        stroke(this.color);
        fill(this.color);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        rect(this.body2.position.x, this.body2.position.y, 20, 70);
        rect(this.body3.position.x, this.body3.position.y, 20, 70);
    }
}