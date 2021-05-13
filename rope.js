class Chain {
constructor(BodyA, pointB) {
    var options= {
     bodyA:BodyA,
     pointB:pointB,
     length:50,
     stiffness:0.1
    }

    this.pointB=pointB
 this.chain=Constraint.create(options);
 World.add(world, this.chain);

}

fly(){
  this.chain.bodyA = null;
}
  attach(body){
        this.chain.bodyA= body
    }


  display(){
    if(this.chain.bodyA){
      strokeWeight(3);
      stroke("red");
      fill("red");
     line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,
        this.chain.pointB.x, this.chain.pointB.y); 
     }
    }
}
