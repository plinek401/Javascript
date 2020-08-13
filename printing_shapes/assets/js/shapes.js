function getLine(length) {
    let i;
    let string = "";
    
    for (i = 0; i < length; i++){
        string += "*";
    }
    console.log(string);
}



function getBox(width, height) {
    let i;
    let string = "";
    
    for (i = 0; i < width; i++){
        string += "*";
    }
    
    for (i = 0; i < height; i++){
        console.log(string);
    }

}



function getBottomLeftTriangle(length) {
    let string = "";
    for(let i = 0; i < length; i++){
        string+="*";
        console.log(string);
    }
}


function getUpperTriangle(length) {
    let pos = 0;
    let string = "";
    for (let j = 0; j < length; j++){
        for(let i = 0; i < length; i++){
            if(i < pos){
                string += " ";
            }
            else{
                string += "*";
            }
        } 
        pos++;
        console.log(string);
        string = "";
    }

}

function getCheckerboard(width, height) {
    let i;
    let string1 = "";
    let string2 = "";
    let realWidth = Math.floor(width/2);
    
    for(i = 0; i < realWidth; i++){
        string1 += "* ";
    }
    for(i = 0; i < realWidth-1; i++){
        string2 += " *";
    }
    let whichStringToPrint = 1;
    for(i = 0; i < height; i++){
        if(whichStringToPrint === 1){
            console.log(string1);
            whichStringToPrint++;
        } else {
            console.log(string2);
            whichStringToPrint--;
        }
    }
}

function getCross(length) {
    let string = "";
    let pos = 0;
    for (let j = 0; j < length; j++){
        for (let i = 0; i < length; i++) {
            if(i === pos || i == length-1-pos){
                string+="*";
            }
            else {
                string+=" ";
            }
        }
        console.log(string);
        string = "";
        pos++;
    }
}

getCross(2);