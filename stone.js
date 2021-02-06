class stone{
    constructor(x,y){
        var options = {
            isStatic: false,
            restituition: 0,
            friction: 1,
            density: 1.2
        }
        this.sling = loadImage('stone.png');
        this.image = Bodies.rectangle(x,y,width,height,options);
        this.image = Constraint.create(options);
        World.add(world, this.stone);
    }
    fly(){
        this.sling.boy = null;
    }
    
        }
       
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
        
            

