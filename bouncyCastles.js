const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  return (4/3)*PI*(radius*radius*radius);
  
}
//1
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (1/3)*PI*height*(radius*radius);

}
//2
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height*width*depth;
}
//3
console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total =0;
  for (let solid of solids){
    if (solid.type === 'sphere'){
      total += sphereVolume(solid.radius)
    }else if (solid.type === 'cone'){
      total += coneVolume(cone.radius, cone.height);
    }else if (solid.type === 'prism'){
      total += prismVolume(solid.height, solid.width, solid.depth)
    }
  }

  return total;

}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
//4
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);