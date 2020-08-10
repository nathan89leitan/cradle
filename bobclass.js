class bob {
    constructor(x, y){
        var options ={
            isStatic:false,
            'restitution':0.05,
            'friction':1,
            'density':1.2
                   }
                   Matter.Bodies.circle(x,y,10,options)
    World.add(world,this.body)

display();{
    var pos=this.body.position;
push();
ellipse(56, 46, 55, 55);
translate(pos.x,pos.y);
    pop();
    }
}
}
