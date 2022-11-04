function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video, 100, 100, 400, 300);
fill("green");
   stroke("green");
   noFill();
   strokeWeight(20);
rect(70, 70, 450, 350);
fill("yellow");
   stroke("yellow");
   circle(70,70, 30);
   circle(520,70, 30);
   circle(70,420, 30);
   circle(520,420, 30);


   
}

function take_snapshot()
{
    save("keshav.png");
}

