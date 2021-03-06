canvas= new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update () {
    fabric.Image.fromURL("player.png",function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({top:player_y, left:player_x
        } )  ; canvas.add(player_object)  });
    }

    function newImage(getImage) {
        fabric.Image.fromUrl(getImage,function (Img) {
            block_object=Img;
            block_object.scaleToWidth(block_width);
            block_object.scaleToHeight(block_height);
            block_object.set({top:player_y, left:player_x});
        });
    }
    window.addEventListener("keydown",my_keydown);

    function my_keydown(e) {
     keypressed=e.keyCode;
     console.log(keypressed);
     if(e.shiftKey==true && keypressed=='80') {
     block_width=block_width+10;
     block_height=block_height+10;
     document.getElementById("current_width").innerHTML=block_width;
     document.getElementById("current_height").innerHTML=block_height;
     }
     if(e.shiftKey==true && keypressed=='77') {
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        }
        if (keypressed=='38') {
            up();
            console.log("up");
        }
        if (keypressed=='40') {
            down();
            console.log("down");
        }
        if (keypressed=='37') {
            left();
            console.log("left");
        }
        if (keypressed=='39') {
            right();
            console.log("right");
        }
        if (keypressed=='87') {
            newImage('wall.jpg');
            console.log("w");
        }
        if (keypressed=='71') {
            newImage('ground.png');
            console.log("g");
        }  
        if (keypressed=='76') {
            newImage('light_green.png');
            console.log("w");
        }
        if (keypressed=='84') {
            newImage('trunk.jpg');
            console.log("t");
        }
        if (keypressed=='82') {
            newImage('roof.jpg');
            console.log("r");
        }
        if (keypressed=='89') {
            newImage('yellow_wall.png');
            console.log("y");
        }
        if (keypressed=='68') {
            newImage('dark_green.png');
            console.log("d");
        }
        if (keypressed=='85') {
            newImage('unique.png');
            console.log("u");
        }
        if (keypressed=='67') {
            newImage('cloud.jpg');
            console.log("c");
        }
    }
      function up() {
         if (player_y>=0) {
             player_y=player_y-block_height;
             console.log(player_y);
             canvas.remove(player_object);
             player_update();
             }
      }
      function down() {
        if (player_y<=500) {
            player_y=player_y+block_height;
            console.log(player_y);
            canvas.remove(player_object);
            player_update();
            }
        }

        function left() {
            if (player_x>=0) {
                player_x=player_x-block_width;
                console.log(player_x);
                canvas.remove(player_object);
                player_update();
                } 
        }
       function right() {
        if (player_x<=850) {
            player_x=player_x+block_width;
            console.log(player_x);
            canvas.remove(player_object);
            player_update();
            } 
       }