var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width_image=30;
block_height_image=30;
var player_object="";
var block_image_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(100);
        player_object.set({
           top:player_y,left:player_x
        });
        canvas.add(player_object);
    } );
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width_image);
        block_image_object.scaleToHeight(block_height_image);
        block_image_object.set({
           top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    } );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
   keypress = e.keyCode;
   console.log(keypress);
   if (e.shiftKey == true && keypress == "80") {
       console.log("Shift and P are pressed together");
       block_width_image = block_width_image+10;
       block_height_image = block_height_image+10;
       document.getElementById("current_width").innerHTML=block_width_image;
       document.getElementById("current_height").innerHTML=block_height_image;
   }
   if (e.shiftKey == true && keypress == "77") {
    console.log("Shift and M are pressed together");
    block_width_image = block_width_image-10;
    block_height_image = block_height_image-10;
    document.getElementById("current_width").innerHTML=block_width_image;
    document.getElementById("current_height").innerHTML=block_height_image;
}
if (keypress == "38") {
    up();
    console.log("Up");
}
if (keypress == "40") {
    down();
    console.log("Down");
}if (keypress == "37") {
    left();
    console.log("Left");
}if (keypress == "39") {
    right();
    console.log("Right");
}
if (keypress == "87") {
    new_image("wall.jpg");
    console.log("W");
}
if (keypress == "71") {
    new_image("ground.png");
    console.log("G");
}
if (keypress == "76") {
    new_image("light_green.png");
    console.log("L");
}
if (keypress == "84") {
    new_image("trunk.jpg");
    console.log("T");
}
if (keypress == "82") {
    new_image("roof.jpg");
    console.log("R");
}
if (keypress == "89") {
    new_image("yellow_wall.png");
    console.log("Y");
}
if (keypress == "68") {
    new_image("dark_green.png");
    console.log("D");
}
if (keypress == "85") {
    new_image("unique.png");
    console.log("U");
}
if (keypress == "67") {
    new_image("cloud.jpg");
    console.log("C");
}
}
function up(){
    if (player_y >= 0) {
        player_y= player_y-block_height_image;
        console.log("block image height ="+block_height_image );
        console.log("When up arrow is pressed Y ="+player_y+"X ="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y <= 500) {
        player_y= player_y+block_height_image;
        console.log("block image height ="+block_height_image );
        console.log("When down arrow is pressed Y ="+player_y+"X ="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x >= 0) {
        player_x= player_x-block_width_image;
        console.log("block image width ="+block_width_image );
        console.log("When left arrow is pressed Y ="+player_y+"X ="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x <= 850) {
        player_x= player_x+block_width_image;
        console.log("block image width ="+block_width_image );
        console.log("When right arrow is pressed Y ="+player_y+"X ="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}