

var wall,thickness;


var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);

  thickness=random(23,83);

  speed=random(223,321)
	weight=random(30,52)

 
  bullet=createSprite(50, 200, 50,50);   

  bullet.velocityX = speed;

	bullet.shapeColor=color(255);



  wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}

function draw() {

  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  
  function hasCollided(Lbullet,Lwall)
 {
	 bulletRightEdge=lbullet.x + bullet.width;
	 wallLeftEdge=lwall.x
	 if(bulletRightEdge>=wallLeftEdge)
	 {
		 return true
	 }
	 return false;

	 if(hasCollided(bullet,wall))
	 {
		 bullet.velocityX=0;
		 var damage=0.5 * weight * speed * speed/(thickness * thickness *thickness);

		 if(damage>10)
		 {
			 wall.shapeColor=colour(255,0,0)
		 }
		 if(damage>10)
		 {
			 wall.shapeColor=colour(0,255,0)
		 }
	 }
 }
  drawSprites();
}

 