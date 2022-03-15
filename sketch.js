var box;
var r = 100,
    g = 100,
    b = 100;
var rand;

function setup() {
    createCanvas(400, 400);
    box = createSprite(45, 45, 15, 15);
}

function draw() {
    background(r, g, b);
    rand = Math.floor(Math.random() * ((6 - 1) + 1) + 1); //for random number(learnt from school)
    if (keyIsDown(LEFT_ARROW)) {
        box.position.x = box.position.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        box.position.x = box.position.x + 5;
    }
    if (keyIsDown(UP_ARROW)) {
        box.position.y = box.position.y - 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        box.position.y = box.position.y + 5;
        if (rand == 1) {
            r = r - 10;
        } else if (rand == 2) {
            g = g - 10;
        } else if (rand == 3) {
            b = b - 10;
        } else if (rand == 4) {
            r = r + 10;
        } else if (rand == 5) {
            g = g + 10;
        } else {
            b = b + 10;
        }
    }
    drawSprites();
}