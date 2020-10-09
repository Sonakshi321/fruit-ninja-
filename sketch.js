var sword,swordImage;

var PLAY=1;

var END=0;

var gamestate=1;

var score;

var fruitGroup;

var enemyGroup;

var fruit1,fruit2,fruit3,fruit4;

var gameOverImage;

var monsterImage;

var knifeSwooshSound;

var gameOverSound;

var bg;






function preload(){
  
  //load animations
  swordImage=loadImage("sword1-removebg-preview.png");
  
  fruit1=loadImage("fruit1.png");
  
  fruit2=loadImage("fruit2.png");
  
  fruit3=loadImage("fruit3.png");
  
  
  fruit4=loadImage("fruit4.png");
  
  monsterImage=loadImage("alien1.png","alien2.png");
  
  gameOverImage=loadImage("g-removebg-preview.png");
  
  //load sounds
  
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  
  gameOverSound=loadSound("gameover.mp3");
  
  bg=loadImage("bg.png");

  }






function setup(){
  
  createCanvas(600,600);
  
  //create sword
  
  sword = createSprite(40,200,20,20);
  
  //add image
  
  sword.addImage(swordImage);
  
  //Scale sword
  
  sword.scale=0.25;
  
  //set score to 0
  
  score=0;
  
  //create Groups
  
  fruitGroup= new Group();
  
  enemyGroup= new Group();
}
  




function draw(){
  //background
  
  background(bg);
  
  //gamestate conditions
  
 if (gamestate===1){
    
   fruits();
  
   enemy();
   
   sword.y=World.mouseY;
   
   sword.x=World.mouseX;
 
   
  
   
  
    
  if(fruitGroup.isTouching(sword)){
    
    //destroy fruits
    
      fruitGroup.destroyEach();
    
    //sound- knife
    
      knifeSwooshSound.play();
   
    //score+2
    
      score=score+2;
    
    
    }
  else
  {
    
    
    if(enemyGroup.isTouching(sword)){
      
      //gamestate=0
      
    gamestate=0;
      
      //destroy fruit and enemy group
      
    fruitGroup.destroyEach();
      
    enemyGroup.destroyEach();
      
     // stop spawning fruits and monsters 
      
    fruitGroup.setVelocityXEach(0);
      
    enemyGroup.setVelocityXEach(0);
      
      //change sword image to game over
      
    sword.addImage(gameOverImage);
      
      //set new position to sword
      
      sword.x=200;
      
      sword.y=200;
      
      //add gameover sound 
      
      gameOverSound.play();
      
      
  }
    
  }
   
 }
  
  
  //display text and change size
  
 textSize(20);
  
 text("Score : "+ score,300,30);
  
 
  
  //draw the sprites 
  
 drawSprites(); 

}

//fruit function

function fruits(){
  
  
  if(World.frameCount%80 ===0){
    
    position=Math.round(random(1,2));
    
   fruit = createSprite(400,200,20,20);
    
    fruit.scale=0.2;
    
    //fruit.debug=true;
    
    r=Math.round(random(1,4));
    
    if (r===1){
      
      fruit.addImage(fruit1);
      
    }else if (r===2){
      
      fruit.addImage(fruit1);
      
    }else if(r===3){
      
      fruit.addImage(fruit3);
      
    }else if(r===4){
      
      fruit.addImage(fruit4);
   
    
    }
    
    //add lifetime to fruit
    
    fruit.lifetime=100;
    
    //fruit y position random
    
    fruit.y=Math.round(random(50,340));
    
    //fruit group
    
    fruitGroup.add(fruit);
    
    //fruit position
    
    if (position===1){
      
      fruit.x=400;
      
      fruit.velocityX=-(7+(score/4));
      
    }
    
    else
      
    {
      
      if (position===2){
        
        fruit.x=0;
        
        fruit.velocityX=(7+(score/4));
      
      }
      
      }
    
      }

      }

//enemy function

function enemy(){
  
if(World.frameCount%200 ===0){
  
  monster = createSprite(400,200,20,20);
  
  monster.addAnimation("moving",monsterImage);
  
  monster.y=Math.round(random(100,300));
  
  monster.velocityX=-(8+(score/10));
  
  monster.lifetime=50;
  
  enemyGroup.add(monster)
    
  }

  }









  


