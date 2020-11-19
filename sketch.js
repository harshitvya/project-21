var wall, thickness;
var bullet, speed, weight;
var damage;


function setup() {
    createCanvas(1366, 400);


    thickness = random(22, 83);

    bullet = createSprite(40, 200, 70, 10);
    wall = createSprite(1300, 200, thickness, height / 2);

    speed = random(223, 321);
    weight = random(30, 52);

    bullet.velocityX = speed;

}

function draw() {
    background(0);

    bullet.shapeColor = "white";

    Hit(bullet, wall)

    drawSprites();
}