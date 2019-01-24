// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
}
// ======================
var mars = [
  [@,@,@,@,@,@,@,@,@,@,],
  [@,@,@,@,@,@,@,@,@,@,],
  [@,@,@,@,@,@,@,@,@,@,],
  [@,@,@,@,@,@,@,@,@,@,],
  [@,@,@,@,!,@,@,@,@,@,],
  [@,@,@,@,@,!,@,@,@,@,],
  [@,@,@,@,!,@,!,@,@,@,],
  [@,@,@,@,@,@,@,@,@,@,],
  [@,@,@,@,@,@,@,@,@,@,],
  [@,@,@,@,@,@,@,@,@,@,],
]; 
function turnLeft(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    console.log("W");
    
    case "W":
    rover.direction = "S";
    console.log("S");
    
    case "S":
    rover.direction = "E";
    console.log("E");
    
    case "E":
    rover.direction = "N";
    console.log("N")

    default:
    console.log("Rover missing")
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    console.log("E");
    
    case "E":
    rover.direction = "S";
    console.log("S");
    
    case "S":
    rover.direction = "W";
    console.log("W");
    
    case "W":
    rover.direction = "N";
    console.log("N")

    default:
    console.log("Rover missing")
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "N";
    console.log("N");
    if(rover.direction === "N"){
      y = y - 1;
      console.log(rover.x + rover.y)
    }
    
    case "W":
    rover.direction = "W";
    console.log("W");
    if(rover.direction === "W"){
      x = x - 1;
      console.log(rover.x + rover.y)
    }

    case "E":
    rover.direction = "E";
    console.log("E");
    if(rover.direction === "E"){
      x = x + 1;
      console.log(rover.x + rover.y)
    }
    case "S":
    rover.direction = "S";
    console.log("S");
    if(rover.direction === "S"){
      y = y + 1;
      console.log(rover.x + rover.y)
    }
    default:
    console.log("Rover missing")
  }
  console.log("moveForward was called")
}
function moveBackwards(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "N";
    console.log("N");
    if(rover.direction === "N"){
      y = y + 1;
      console.log(rover.x + rover.y)
    }
    
    case "W":
    rover.direction = "W";
    console.log("W");
    if(rover.direction === "W"){
      x = x + 1;
      console.log(rover.x + rover.y)
    }

    case "E":
    rover.direction = "E";
    console.log("E");
    if(rover.direction === "E"){
      x = x - 1;
      console.log(rover.x + rover.y)
    }
    case "S":
    rover.direction = "S";
    console.log("S");
    if(rover.direction === "S"){
      y = y - 1;
      console.log(rover.x + rover.y)
    }
    default:
    console.log("Rover missing")
  }
  console.log("moveBackwards was called")
}
var addComand = function(){
  for (var i = 0; i <= 10; i++){
    if (addCommand === "r" || addCommand === "R") {
      turnRight();
    } 
    else if (addCommand === "l" || addCommand === "L") {
      turnLeft();
    } 
    else if (addCommand === "f" || addCommand === "F") {
      moveForward();
  }
  else if (addCommand === "b" || addCommand === "B") {
    moveBackwards();
  }
  else{
    console.log("Please type or f/F or r/R or or l/L or b/B ");
  }
}
rover.travelLog = fuction(){
  for (rover in x){
    console.log(rover.x);
  }
  for (rover in y){
    console.log(rover.y);
  }
}
addComand();


