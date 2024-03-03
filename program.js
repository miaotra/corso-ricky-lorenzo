var x = 3;
var y = 3;

var px=[]
var py=[]

px[0]=2
px[1]=3
py[0]=3
py[1]=3

var l = 2;

var up = false;
var down = true;
left = false;
right = false;



winner = 0;




function mainCycle() {


    //   if (up) y--;

    var game = window.game;
   game.clear();

    if(game.getPixel(x,y)!="#FFF"){
        winner=2;
    }

    

    if(winner>0) {
        console.log("winner is "+winner);
        return;
    }


  

    for(i=0;i<l;i++){
        game.setPixel(px[i],py[i], "green")
    }
    

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

for(i=0;i<(l-1);i++){
    px[i]=px[i+1]
    py[i]=py[i+1]
}
    px[l-1]=x
    py[l-1]=y

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

}


function keyReleased(keyCode) {
    console.log("Key Released: " + keyCode);
/*
    up = (keyCode == "ArrowUp") ? false : up;
    down = (keyCode == "ArrowDown") ? false : down;
    left = (keyCode == "ArrowLeft") ? false : left;
    right = (keyCode == "ArrowRight") ? false : right;
*/
}
   