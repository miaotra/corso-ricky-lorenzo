var x = 3;
var y = 3;

var x2 = 16;
var y2 = 16;

var up = false;
var down = true;
left = false;
right = false;

var up2 = true;
var down2 = false;
left2 = false;
right2 = false;

winner = 0;




function mainCycle() {


    //   if (up) y--;

    var game = window.game;
   // game.clear();

    if(game.getPixel(x,y)!="#FFF"){
        winner=2;
    }

    if(game.getPixel(x2,y2)!="#FFF"){
        winner=1;
    }

    if(winner>0) {
        console.log("winner is "+winner);
        return;
    }


    game.setPixel(x, y, "green");

    game.setPixel(x2, y2, "purple");

    if (up) {
        if (y > 0) {
            y = y - 1;

        }

    }

    if (down) {
        if(y<19) {
            y = y + 1;
        }
        
    }

    if (right) {
        if(x<19) {
            x = x + 1;
        }
    }

    if (left) {
        if(x>0) {
            x = x - 1;
        }
    }



    if (up2) {
        if (y2 > 0) {
            y2 = y2 - 1;

        }

    }

    if (down2) {
        if(y2<19) {
            y2 = y2 + 1;
        }
        
    }

    if (right2) {
        if(x2<19) {
            x2 = x2 + 1;
        }
    }

    if (left2) {
        if(x2>0) {
            x2 = x2 - 1;
        }
    }






















    game.draw();
    game.nextFrame();
}



function keyPressed(keyCode) {
    console.log("Key Pressed: " + keyCode);


    if (keyCode == "ArrowUp") {
        up=true;
        left=false;
        right=false;
        down=false;
    }


    if (keyCode == "ArrowDown") {
        up=false;
        left=false;
        right=false;
        down=true;
    }



    if (keyCode == "ArrowLeft") {
        up=false;
        left=true;
        right=false;
        down=false;
    }


    if (keyCode == "ArrowRight") {
        up=false;
        left=false;
        right=true;
        down=false;
    }

    



    if (keyCode == "w") {
        up2=true;
        left2=false;
        right2=false;
        down2=false;
    }


    if (keyCode == "s") {
        up2=false;
        left2=false;
        right2=false;
        down2=true;
    }



    if (keyCode == "a") {
        up2=false;
        left2=true;
        right2=false;
        down2=false;
    }


    if (keyCode == "d") {
        up2=false;
        left2=false;
        right2=true;
        down2=false;
    }

    

 
    

   


}


function keyReleased(keyCode) {
    console.log("Key Released: " + keyCode);

    /* up = (keyCode == "ArrowUp") ? false : up;
    down = (keyCode == "ArrowDown") ? false : down;
    left = (keyCode == "ArrowLeft") ? false : left;
    right = (keyCode == "ArrowRight") ? false : right;

    up2 = (keyCode == "w") ? false : up2;
    down2 = (keyCode == "s") ? false : down2;
    left2 = (keyCode == "a") ? false : left2;
    right2 = (keyCode == "d") ? false : right2;
 */
}




