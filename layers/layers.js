
function setup() {  
    const canvas = createCanvas(600, 400, WEBGL);
    canvas.parent('canvas-container');

    describe(
      'a 3d example containing seven primitive objects, a plane, box, and a cylinder.'
    );
  }
  
  function draw() {
    background(250);
  
    normalMaterial();
    push();
    translate(-240, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(70);
    pop();
  
    push();
    translate(0, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(70, 70, 70);
    pop();
  
    push();
    translate(240, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(70, 70);
    pop();
  
 
  }
  