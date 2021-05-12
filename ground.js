class Ground{
    constructor(x,y,w,h,c){
        var options = {
            isStatic: true,
            density:2
        }
        this.w = w;
        this.h = h;
        this.color = c;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        
        rectMode(CENTER);
        fill(this.color);
        stroke(this.color);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}