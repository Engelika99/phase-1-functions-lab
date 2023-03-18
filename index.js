
function distanceFromHqInBlocks(elBlock){

 return Math.abs(elBlock - 42)

}

  function distanceFromHqInFeet(elBlock) {
const losFeet = distanceFromHqInBlocks(Math.abs(elBlock-42)*264);
  return losFeet+42;
 

 
  }
 
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start-destination)*264;
 
  
}
function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  if(distance <= 400) {
    return 0;
}else if(distance >= 400 && distance < 2000){
return (distance-400)*0.02;
}else if(distance > 2000 && distance <= 2500){
  return 25;
}else
return "cannot travel that far"
  }
  


  

    





