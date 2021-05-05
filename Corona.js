class Corona{
    constructor(x,y,r){

        var options={
         isStatic:true,
            restitution:0.4,
            density:1,
            friction:0.1
        }
        this.r=r;
        this.image=loadImage("Sprites/corona1.png");
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){

        console.log(this.body.speed)
        //if((this.body.speed)<3){     
         //World.remove(world,this.body);
       // }
        //else{
            var position=this.body.position;
            var angle=this.body.angle;
            push();
           translate(position.x,position.y);
           rotate(angle);
           image(this.image,0,0,this.r,this.r);
            pop();
 //       }
    }
    
    }
