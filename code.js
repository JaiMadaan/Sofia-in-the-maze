var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(20, 25,18,18);
Sofia.shapeColor="orange";
var cup=createSprite(400,380,20,120);
cup.shapeColor="yellow";
var cardboard1=createSprite(10,80,200,20);
cardboard1.shapeColor="red";
var cardboard2=createSprite(200,180,100,20);
cardboard2.shapeColor="red";
var cardboard3=createSprite(160,140,100,20);
cardboard3.shapeColor="red";
var cardboard4=createSprite(200,20,30,140);
cardboard4.shapeColor="red";
var cardboard5=createSprite(300,40,110,20);
cardboard5.shapeColor="red";
var cardboard6=createSprite(300,100,20,120);
cardboard6.shapeColor="red";
var cardboard7=createSprite(200,300,21,128);
cardboard7.shapeColor="red";
var cardboard8=createSprite(300,220,110,20);
cardboard8.shapeColor="red";
var cardboard9=createSprite(300,280,110,20);
cardboard9.shapeColor="red";
var cardboard10=createSprite(110,230,100,20);
cardboard10.shapeColor="red";
var cardboard11=createSprite(300,350,110,20);
cardboard11.shapeColor="red";
var cardboard12=createSprite(360,150,20,150);
cardboard12.shapeColor="red";
var cardboard13=createSprite(40,140,20,120);
cardboard13.shapeColor="red";
var cardboard14=createSprite(70,240,20,120);
cardboard14.shapeColor="red";
var cardboard15=createSprite(150,320,20,100);
cardboard15.shapeColor="red";
var cardboard16=createSprite(80,380,110,20);
cardboard16.shapeColor="red";
var cardboard17=createSprite(90,30,100,20);
cardboard17.shapeColor="red";
var cardboard18=createSprite(370,270,20,80);
cardboard18.shapeColor="red";
var cardboard19=createSprite(260,380,100,20);
cardboard19.shapeColor="red";

function draw(){
  background("grey")
   
  if (keyDown(UP_ARROW)) {
    Sofia.velocityX=0;
    Sofia.velocityY=-4;
    }
  if (keyDown(DOWN_ARROW)) {
    Sofia.velocityX=0;
    Sofia.velocityY=4;
      
    }
   if (keyDown(LEFT_ARROW)) {
     Sofia.velocityX=-4;
     Sofia.velocityY=0;
      
    }
    if (keyDown(RIGHT_ARROW)) {
      Sofia.velocityX=4;
      Sofia.velocityY=0;
    }
    
      createEdgeSprites();
    Sofia.bounceOff(edges);

      
    
   drawSprites();  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
