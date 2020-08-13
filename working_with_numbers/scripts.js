function adding() {
    let arr = prompt("Enter numbers to add: ").split(" ");
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }
    console.log(sum);
}

function simpCalc(){
    let arr = prompt("Enter numbers to add: ");
    let newArr = properArray(arr);
    let sum = 0;
    let state = "+";
    let temp = [];
    let seenSemicolon = false;
    
    //Gets rid of spaces and other clean-up.
    for(let i = 0; i < arr.length; i++){
        if (newArr[i] === "^"){
            newArr[i-1] = parseInt(newArr[i-1]) * parseInt(newArr[i-1]);
            newArr.splice(i,1);
        }
        if(newArr[i] === ""){
        	newArr.splice(i,1);
        }
    }
    
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === "+"){
            state = "+";
        }
        else if(newArr[i] === "-"){
            state = "-";
        }
        else if(newArr[i] === ";"){
            temp.push(sum);
            temp.push(";");
            seenSemicolon = true;
            sum = 0;
        }
        else{
            if(state == "+"){
                sum += parseInt(newArr[i]); 
            }
            else if(state == "-"){
                sum -= parseInt(newArr[i]); 
            }
        }
    }
    
    let output = "";
    if(!seenSemicolon){
        console.log(sum);
    }
    else{
        for(i = 0; i < temp.length; i++){
            if(temp[i] == ";"){
                continue;
            }
            else{
                console.log(temp[i]);   
            }
        }
    }
    console.log("temp " + temp);
    console.log("newArr " + newArr);
    console.log("sum " + sum);
}

function properArray(arr){
    let propArr = []
    let prevMarker = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "+" || arr[i] ==="-" || arr[i] === "^" || arr[i] == ";"){
            propArr.push(arr.slice(prevMarker, i));
            propArr.push(arr[i]);
            prevMarker = i+1;
        }
        if(i === arr.length-1){
            propArr.push(arr.slice(prevMarker, i+1));
        }
    }
    return propArr;
}




simpCalc();