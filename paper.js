class Paper{
    constructor(x,y,r,c){
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2
        }
        this.r = r;
        this.color = c;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display(){
        
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}