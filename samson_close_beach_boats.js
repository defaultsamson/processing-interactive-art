/** Samson Close
    Assignment 1 - Interactive Drawing
    September 23, 2020
    
    Beach Sailing
    
    Move your cursor up and down to change the intensity of the waves & wind.
    Move your cursors side to side to control the boats.
    
    
    
    Code notes: In this code, you will see plenty of...
    
    (x * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))
    
    - This is used for waves, wind, and bobbing boats
    - The (mouseY * 0.0025 + 0.2) divides the mouseY by 400, then added to 0.2, resulting in a value from 0.2 to 1.2 
    - The x value is multiplied by the 0.2-1.2 range
    - The sin function adds oscillation to the total value from -1 to 1, at 1/40 of the framerate
    - The result is an oscillating value from x*0.2 to x*1.2, depending on the user's cursor Y value
    
    There are similar variations of this pattern that use different values, and some which don't accept user input.
    
    (frameCount * 0.15 + x) % 500 - 50
    
    - This is used to make the clouds repeat
    - x is the initial x offset of the cloud
    - frameCount * 0.15 makes the cloud move at 0.15 times the framerate
    - % 500 - 50 means the clouds start with an x value of -50, and can travel 500 pixels, meaning their final x value is 450 before repeating (because of the modulus %)
*/

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke(); // We don't ever use stroke, so we can set noStroke
  rectMode(CENTER); // Rect mode to center
  ellipseMode(CENTER); // Ellipse mode to center
}

// Draw the art
function draw() {
  //////////////////// Sky ////////////////////
  
  background(150, 215, 255); // Light Sky Blue


  //////////////////// Clouds ////////////////////
  //      X1                                       Y1                                            X2    Y2
  fill(233, 233, 233); // Cloud dark
  ellipse((frameCount * 0.15 + 10) % 500 - 50,     50 + (10 * sin(frameCount * 0.005 + 13)),     40,   20);
  ellipse((frameCount * 0.15 + 40) % 500 - 50,     55 + (10 * sin(frameCount * 0.005 + 12)),     40,   20);
  fill(255, 255, 255); // White
  ellipse((frameCount * 0.15 + 30) % 500 - 50,     45 + (10 * sin(frameCount * 0.005 + 12)),     50,   30);
  ellipse((frameCount * 0.15 + 35) % 500 - 50,     50 + (10 * sin(frameCount * 0.005 + 14)),     40,   20);
  ellipse((frameCount * 0.15 + 0) % 500 - 50,      52 + (10 * sin(frameCount * 0.005 + 13.5)),   40,   20);
  
  fill(233, 233, 233); // Cloud dark
  ellipse((frameCount * 0.15 + 105) % 500 - 50,    40 + (10 * sin(frameCount * 0.005 + 70.5)),   40,   20);
  fill(255, 255, 255); // White
  ellipse((frameCount * 0.15 + 100) % 500 - 50,    30 + (10 * sin(frameCount * 0.005 + 71)),     40,   20);
  ellipse((frameCount * 0.15 + 110) % 500 - 50,    35 + (10 * sin(frameCount * 0.005 + 70)),     40,   20);
  
  fill(233, 233, 233); // Cloud dark
  ellipse((frameCount * 0.15 + 145) % 500 - 50,    75 + (10 * sin(frameCount * 0.005 + 20.5)),   40,   20);
  fill(255, 255, 255); // White
  ellipse((frameCount * 0.15 + 155) % 500 - 50,    65 + (10 * sin(frameCount * 0.005 + 19)),     40,   20);
  ellipse((frameCount * 0.15 + 150) % 500 - 50,    69 + (10 * sin(frameCount * 0.005 + 22)),     40,   20);
  ellipse((frameCount * 0.15 + 150) % 500 - 50,    70 + (10 * sin(frameCount * 0.005 + 21)),     40,   20);
  
  fill(233, 233, 233); // Cloud dark
  ellipse((frameCount * 0.15 + 220) % 500 - 50,    30 + (10 * sin(frameCount * 0.005 + 9.5)),    40,   20);
  ellipse((frameCount * 0.15 + 255) % 500 - 50,    32 + (10 * sin(frameCount * 0.005 + 10)),     40,   20);
  ellipse((frameCount * 0.15 + 260) % 500 - 50,    35 + (10 * sin(frameCount * 0.005 + 9)),      40,   20);
  fill(255, 255, 255); // White
  ellipse((frameCount * 0.15 + 230) % 500 - 50,    25 + (10 * sin(frameCount * 0.005 + 11)),     50,   30);
  ellipse((frameCount * 0.15 + 250) % 500 - 50,    30 + (10 * sin(frameCount * 0.005 + 10)),     40,   20);
  
  fill(233, 233, 233); // Cloud dark
  ellipse((frameCount * 0.15 + 340) % 500 - 50,    40 + (10 * sin(frameCount * 0.005 + 70)),     20,   20);
  ellipse((frameCount * 0.15 + 340) % 500 - 50,    45 + (10 * sin(frameCount * 0.005 + 70.5)),   40,   20);
  fill(255, 255, 255); // White
  ellipse((frameCount * 0.15 + 335) % 500 - 50,    35 + (10 * sin(frameCount * 0.005 + 71)),     40,   20);
  ellipse((frameCount * 0.15 + 330) % 500 - 50,    35 + (10 * sin(frameCount * 0.005 + 69)),     40,   20);
  ellipse((frameCount * 0.15 + 330) % 500 - 50,    40 + (10 * sin(frameCount * 0.005 + 71)),     50,   30);
  
  fill(233, 233, 233); // Cloud dark
  ellipse((frameCount * 0.15 + 425) % 500 - 50,    55 + (10 * sin(frameCount * 0.005 + 7.5)),    40,   20);
  ellipse((frameCount * 0.15 + 430) % 500 - 50,    55 + (10 * sin(frameCount * 0.005 + 6)),      40,   20);
  fill(255, 255, 255); // White
  ellipse((frameCount * 0.15 + 430) % 500 - 50,    45 + (10 * sin(frameCount * 0.005 + 7)),      20,   20);
  ellipse((frameCount * 0.15 + 440) % 500 - 50,    45 + (10 * sin(frameCount * 0.005 + 7.1)),    40,   20);
  ellipse((frameCount * 0.15 + 440) % 500 - 50,    50 + (10 * sin(frameCount * 0.005 + 8)),      50,   30);
  
  
  //////////////////// Sand ////////////////////
  
  fill(255, 241, 181);
  rect(200, 300, 400, 200); // Covers bottom half of screen
  
  
  //////////////////// Shoreline ////////////////////
  //   X1     Y1                                                                            X2     Y2
  fill(224, 208, 141); // Dark brown
  // Wet sand under foam
  rect(200,   315 + ((mouseY * 0.0025 + 0.2) * 8 * sin(frameCount * 0.025 + 140)),          400,   30 + (5 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)));
  fill(255, 255, 255); // White
  // Foam at shoreline
  rect(200,   315 + ((mouseY * 0.0025 + 0.2) * 8 * sin(frameCount * 0.025 + TWO_PI / 2)),   400,   30 + (5 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)));
  
  
  //////////////////// Waves 1 ////////////////////
  
  // There will be a lot of slight fill changes, the water colour gets whiter as it approches us
  fill(11, 135, 163);
  rect(200, 205, 400, 50); // Horizon line
  // Give the horizon line some waviness
  //      X1     Y1                                                                    X2     Y2
  ellipse(0,     205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 10)),   400,   50);
  ellipse(50,    205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 20)),   400,   50);
  ellipse(100,   205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 30)),   400,   50);
  ellipse(200,   205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 40)),   400,   50);
  ellipse(250,   205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 50)),   400,   50);
  ellipse(300,   205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 60)),   400,   50);
  ellipse(400,   205 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 70)),   400,   50);
  fill(17, 143, 171);
  rect(200, 215, 400, 50 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 10)));
  
  
  //////////////////// Boat 1 (Triangle Sails)
  // Note: During this code, you will see +150 added to the X values. This is because the boat was constructed on-screen, then offset to the right by 150 pixels afterwards for ease of programming so that it begins off-screen.
  
  //       X1                            Y1                                                               X2                            Y2                                                               X3                            Y3                                                               X4                            Y4
  fill(120, 120, 120); // Grey
  // Pole
  quad(    320 + 150 - (mouseX * 0.5),   132 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   320 + 150 - (mouseX * 0.5),   192 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   322 + 150 - (mouseX * 0.5),   192 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   322 + 150 - (mouseX * 0.5),   132 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  fill(250, 250, 250); // White
  // Body
  triangle(300 + 150 - (mouseX * 0.5),   191 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   350 + 150 - (mouseX * 0.5),   191 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   325 + 150 - (mouseX * 0.5),   232 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  // Left sail
  triangle(298 + 150 - (mouseX * 0.5),   187 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   320 + 150 - (mouseX * 0.5),   188 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   320 + 150 - (mouseX * 0.5),   132 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  // Right sail
  triangle(354 + 150 - (mouseX * 0.5),   187 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   322 + 150 - (mouseX * 0.5),   188 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   322 + 150 - (mouseX * 0.5),   132 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  fill(220, 220, 220); // Light grey
  // Body shadow
  triangle(308 + 150 - (mouseX * 0.5),   202 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   350 + 150 - (mouseX * 0.5),   191 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   325 + 150 - (mouseX * 0.5),   232 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  fill(236, 236, 236); // Light light grey
  // Left sail shadow
  triangle(316 + 150 - (mouseX * 0.5),   188 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   320 + 150 - (mouseX * 0.5),   188 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   320 + 150 - (mouseX * 0.5),   132 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  // Right sail shadow
  triangle(330 + 150 - (mouseX * 0.5),   188 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   322 + 150 - (mouseX * 0.5),   188 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   322 + 150 - (mouseX * 0.5),   132 + (2 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025))); 
  
  
  //////////////////// Waves 2 ////////////////////
  
  //   X1     Y1     X2     Y2
  fill(25, 153, 181);
  rect(200,   225,   400,   50 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 20)));
  fill(31, 162, 191);
  rect(200,   240,   400,   50 + (4 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 30)));
  fill(41, 174, 204);
  rect(200,   258,   400,   50 + (5 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 40)));
  
  
  //////////////////// Boat 2 (Botor Boat) ////////////////////
  // Note: During this code, you will see -200 added to the X values. This is because the boat was constructed on-screen, then offset to the left by 200 pixels afterwards for ease of programming so that it begins off-screen.
  
  //       X1                            Y1                                                                    X2                            Y2                                                                    X3                            Y3                                                                    X4                            Y4
  fill(255, 255, 255, 80); // Translucent white
  // Window
  quad(    150 - 200 + (mouseX * 0.6),   220 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   100 - 200 + (mouseX * 0.6),   200 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   96 - 200 + (mouseX * 0.6),    202 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   147 - 200 + (mouseX * 0.6),   223 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  
  fill(220, 220, 220); // light grey
  // Console
  triangle(110 - 200 + (mouseX * 0.6),   217 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   130 - 200 + (mouseX * 0.6),   223 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   106 - 200 + (mouseX * 0.6),   224 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  
  fill(50, 50, 50); // Black
  // Wheel
  quad(    108 - 200 + (mouseX * 0.6),   216 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   106 - 200 + (mouseX * 0.6),   214 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   104 - 200 + (mouseX * 0.6),   226 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   106 - 200 + (mouseX * 0.6),   224 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  // Motor
  quad(    18 - 200 + (mouseX * 0.6),    230 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   50 - 200 + (mouseX * 0.6),    229 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   50 - 200 + (mouseX * 0.6),    260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   20 - 200 + (mouseX * 0.6),    260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  // Seat
  quad(    76 - 200 + (mouseX * 0.6),    218 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   80 - 200 + (mouseX * 0.6),    217 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   82 - 200 + (mouseX * 0.6),    230 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   78 - 200 + (mouseX * 0.6),    230 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  
  fill(250, 250, 250); // White
  // Body
  quad(    30 - 200 + (mouseX * 0.6),    223 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   150 - 200 + (mouseX * 0.6),   220 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   100 - 200 + (mouseX * 0.6),   260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   34 - 200 + (mouseX * 0.6),    260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  fill(236, 236, 236); // Light light grey
  // Vertical shadow
  triangle(150 - 200 + (mouseX * 0.6),   220 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   100 - 200 + (mouseX * 0.6),   260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   80 - 200 + (mouseX * 0.6),    260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));
  // Horizontal shadow
  quad(    32 - 200 + (mouseX * 0.6),    243 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   120 - 200 + (mouseX * 0.6),   243 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   100 - 200 + (mouseX * 0.6),   260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)),   34 - 200 + (mouseX * 0.6),    260 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 55)));

  //////////////////// Waves 3 ////////////////////
  
  fill(58, 185, 214);
  rect(200,   273,   400,   50 + (5 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 53)));
  fill(80, 195, 222);
  rect(200,   290,   400,   40 + (5 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 67)));
  fill(160, 233, 250);
  // The lightest, closest wave. This wave changes y values as well, not only height.
  //   X1     Y1                                                                                         X2     Y2
  rect(200,   305 + ((mouseY * 0.0025 + 0.2) * 8 * sin(frameCount * 0.025 + TWO_PI / 2 + TWO_PI / 8)),   400,   30 + (5 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + 5 * TWO_PI / 8)));
  
  
  //////////////////// Towel ////////////////////
  
  fill(191, 33, 33); // Dark red base
  quad(220, 354,   223, 383,   318, 380,   300, 352);
  fill(217, 63, 63); // Light red stitches
  quad(229, 356,   233, 356,   239, 380,   234, 380); // Left
  quad(289, 355,   293, 355,   307, 378,   301, 378); // Right
  
  
  //////////////////// Umbrella ////////////////////
  
  // Shadow
  fill(50, 50, 50, 100);
  ellipse(300 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)), 382, 110, 20);
  
  // Pole
  fill(120, 120, 120); // Pole dark
  quad(298,   385,   301,   385,   330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   301,   328 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300);
  fill(160, 160, 160); // Pole highlight
  quad(298,   385,   299,   385,   330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   299,   328 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300);

  // Umbrella top (from left to right)
  //       X1                                                               Y1     X2                                                               Y2                                                                            X3                                                               Y3
  fill(250, 250, 250); // White
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   287 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   293 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),                276 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   297 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)));
  fill(224, 20, 20); // Red
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   285 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   317 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),                276 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   297 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)));
  fill(250, 250, 250); // White
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   285 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   317 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),                316 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   336 + (1 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)));
  fill(224, 20, 20); // Red
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   346 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   343 + (1 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)),   316 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   336 + (1 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)));
  fill(250, 250, 250); // White
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   346 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   343 + (1 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)),   370 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   338 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)));
  fill(224, 20, 20); // Red
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   370 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   333 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)),   370 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   338 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)));
  fill(250, 250, 250); // White
  triangle(330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   300,   370 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   333 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)),   369 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025)),   330 + (3 * (mouseY * 0.0025 + 0.2) * sin(frameCount * 0.025 + TWO_PI / 2)));

}
