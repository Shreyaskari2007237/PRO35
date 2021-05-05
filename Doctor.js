class  Doctor
{
    constructor(x,y,w,h)
    {
        var options={
          //  'isStatic':false,
            'restitution' : 1,
            'friction': 0.3,
            'density': 1
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("Sprites/Doctor.png");
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
       translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();     
    }
}
