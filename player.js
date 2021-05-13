class Player {
    constructor(x,y) {
      var options = {
          'restitution':0.5,
            'friction':1.0,
            'density':1
      }
      this.body = Bodies.rectangle(x,y,30, 40,options);
      World.add(world, this.body);
      

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, 30, 40);
    }
  }