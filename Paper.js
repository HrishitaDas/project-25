class Paper{
    constructor(){
        var option = {
            isStatic:false,
            restitution: 0.3,
            friction:1,
            density:1.2,
        }
        this.body=Bodies.circle(200,450,10,option);
        this.radius=10;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            fill("pink");
            image(this.image,pos.x,pos.y,40,40);

        }

}