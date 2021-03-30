class Slope{
    constructor(){
     var option={isStatic:true}
     this.body=Bodies.rectangle(200,390,400,100,option);
     this.width=400;
     this.height=100;
     World.add(world,this.body);
    }
    paint(){
        push()
        fill("brown");
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}